-- Make Cash on Delivery placement final from the ordering perspective while
-- retaining a pending payment state, and provide one secure admin-wide change
-- stream for authenticated Supabase admins.

UPDATE public.orders
SET
  status = 'order_placed',
  updated_at = NOW()
WHERE payment_method = 'pp_system_default'
  AND status = 'pending';

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM public.orders
    WHERE metadata->>'cart_id' IS NOT NULL
      AND status NOT IN ('cancelled', 'failed')
    GROUP BY metadata->>'cart_id'
    HAVING COUNT(*) > 1
  ) THEN
    RAISE EXCEPTION 'Cannot enforce order idempotency: duplicate active cart orders exist';
  END IF;
END;
$$;

DROP INDEX IF EXISTS public.idx_orders_pending_cart_id;

CREATE UNIQUE INDEX IF NOT EXISTS idx_orders_active_cart_id
ON public.orders ((metadata->>'cart_id'))
WHERE metadata->>'cart_id' IS NOT NULL
  AND status NOT IN ('cancelled', 'failed');

CREATE OR REPLACE FUNCTION public.create_cod_order_with_payment(
  p_cart_id text,
  p_email text,
  p_shipping_address jsonb,
  p_billing_address jsonb,
  p_payment_provider text,
  p_rewards_to_apply integer DEFAULT 0
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public', 'pg_temp'
AS $$
DECLARE
  v_existing_order_id text;
  v_result jsonb;
  v_order_id text;
BEGIN
  IF p_payment_provider <> 'pp_system_default' THEN
    RAISE EXCEPTION 'create_cod_order_with_payment only supports Cash on Delivery';
  END IF;

  -- Serialize attempts for the same cart so double-clicks and network retries
  -- cannot create two active orders.
  PERFORM pg_advisory_xact_lock(hashtextextended(p_cart_id, 0));

  SELECT id
  INTO v_existing_order_id
  FROM public.orders
  WHERE metadata->>'cart_id' = p_cart_id
    AND status NOT IN ('cancelled', 'failed')
  ORDER BY created_at DESC
  LIMIT 1;

  IF v_existing_order_id IS NOT NULL THEN
    RETURN jsonb_build_object(
      'success', true,
      'order_id', v_existing_order_id,
      'idempotent_replay', true
    );
  END IF;

  v_result := public.create_order_with_payment(
    p_cart_id,
    p_email,
    p_shipping_address,
    p_billing_address,
    p_payment_provider,
    p_rewards_to_apply
  );

  v_order_id := v_result->>'order_id';

  UPDATE public.orders
  SET
    status = 'order_placed',
    payment_status = 'pending',
    fulfillment_status = 'not_shipped',
    updated_at = NOW()
  WHERE id = v_order_id;

  RETURN v_result;
END;
$$;

REVOKE ALL ON FUNCTION public.create_cod_order_with_payment(
  text, text, jsonb, jsonb, text, integer
) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.create_cod_order_with_payment(
  text, text, jsonb, jsonb, text, integer
) TO service_role;

CREATE OR REPLACE FUNCTION public.broadcast_admin_data_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public', 'realtime', 'pg_temp'
AS $$
BEGIN
  PERFORM realtime.broadcast_changes(
    'admin:data',
    TG_OP,
    TG_OP,
    TG_TABLE_NAME,
    TG_TABLE_SCHEMA,
    NEW,
    OLD
  );

  RETURN COALESCE(NEW, OLD);
END;
$$;

REVOKE ALL ON FUNCTION public.broadcast_admin_data_change() FROM PUBLIC;

ALTER TABLE realtime.messages ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Authenticated admins receive admin data broadcasts"
  ON realtime.messages;
CREATE POLICY "Authenticated admins receive admin data broadcasts"
ON realtime.messages
FOR SELECT
TO authenticated
USING (
  (SELECT realtime.topic()) = 'admin:data'
  AND (SELECT public.is_admin())
);

DO $$
DECLARE
  v_table text;
BEGIN
  FOREACH v_table IN ARRAY ARRAY[
    'orders',
    'order_timeline',
    'products',
    'product_variants',
    'product_options',
    'product_option_values',
    'product_categories',
    'product_collections',
    'categories',
    'collections',
    'profiles',
    'reviews',
    'review_media',
    'promotions',
    'payment_providers',
    'shipping_options',
    'shipping_partners',
    'global_settings',
    'club_settings',
    'home_banners',
    'home_exclusive_collections',
    'home_reviews',
    'admin_roles',
    'admin_notifications',
    'reward_wallets',
    'reward_transactions',
    'trivara_order_bookings',
    'trivara_sync_snapshots'
  ]
  LOOP
    EXECUTE format(
      'DROP TRIGGER IF EXISTS broadcast_admin_data_changes ON public.%I',
      v_table
    );
    EXECUTE format(
      'CREATE TRIGGER broadcast_admin_data_changes AFTER INSERT OR UPDATE OR DELETE ON public.%I FOR EACH ROW EXECUTE FUNCTION public.broadcast_admin_data_change()',
      v_table
    );
  END LOOP;
END;
$$;
