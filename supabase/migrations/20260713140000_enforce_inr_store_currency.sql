-- Nutranza is an INR-only storefront. Normalize existing records and prevent
-- future products, carts, or orders from introducing another currency.

update public.products
set currency_code = 'inr', updated_at = now()
where currency_code is distinct from 'inr';

update public.carts
set currency_code = 'inr', updated_at = now()
where currency_code is distinct from 'inr';

update public.orders
set currency_code = 'inr', updated_at = now()
where currency_code is distinct from 'inr';

alter table public.products
  alter column currency_code set default 'inr',
  alter column currency_code set not null;

alter table public.carts
  alter column currency_code set default 'inr',
  alter column currency_code set not null;

alter table public.orders
  alter column currency_code set default 'inr';

alter table public.products
  drop constraint if exists products_currency_code_inr_only;
alter table public.products
  add constraint products_currency_code_inr_only
  check (lower(currency_code) = 'inr');

alter table public.carts
  drop constraint if exists carts_currency_code_inr_only;
alter table public.carts
  add constraint carts_currency_code_inr_only
  check (lower(currency_code) = 'inr');

alter table public.orders
  drop constraint if exists orders_currency_code_inr_only;
alter table public.orders
  add constraint orders_currency_code_inr_only
  check (lower(currency_code) = 'inr');
