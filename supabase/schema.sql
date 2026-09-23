-- Antara Parfum — Supabase schema
-- Run this in the Supabase SQL editor to create the storefront tables.
-- Field names match lib/products.ts so switching from mock data to live
-- data later is a drop-in change.

create table if not exists collections (
  slug text primary key,
  name text not null,
  description text,
  hue_from text,
  hue_to text
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  tagline text,
  description text,
  category text not null check (category in ('Eau de Parfum', 'Attar', 'Body Mist', 'Gift Set')),
  gender text not null check (gender in ('Her', 'Him', 'Unisex')),
  collection_slug text references collections(slug),
  price integer not null,
  compare_at_price integer,
  size text,
  notes_top text[],
  notes_heart text[],
  notes_base text[],
  concentration text,
  longevity text,
  hue_from text,
  hue_to text,
  badge text,
  rating numeric(2,1) default 0,
  review_count integer default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists customers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  phone text,
  created_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id),
  status text not null default 'pending' check (status in ('pending', 'paid', 'shipped', 'delivered', 'cancelled')),
  shipping_address jsonb,
  subtotal integer not null,
  shipping_fee integer not null default 0,
  total integer not null,
  created_at timestamptz default now()
);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id),
  quantity integer not null default 1,
  unit_price integer not null
);

-- Row Level Security: products/collections are publicly readable; orders and
-- customers are locked down. Wire up proper policies once auth + the admin
-- panel are in place.
alter table products enable row level security;
alter table collections enable row level security;
alter table orders enable row level security;
alter table customers enable row level security;

create policy "Public can read active products" on products
  for select using (is_active = true);

create policy "Public can read collections" on collections
  for select using (true);
