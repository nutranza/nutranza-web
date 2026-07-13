INSERT INTO public.payment_providers (
  id,
  name,
  description,
  is_active,
  discount_percentage,
  partial_payment_percentage
)
VALUES (
  'pp_system_default',
  'Cash on Delivery',
  'Pay with cash when your order arrives.',
  true,
  0,
  NULL
)
ON CONFLICT (id) DO UPDATE
SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  is_active = true,
  discount_percentage = 0,
  partial_payment_percentage = NULL;
