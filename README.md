# Antara — perfume ecommerce template

A complete storefront for a fragrance brand: home, shop with filters, product
detail, cart, and a checkout stub. Built as a portfolio-ready template — swap
the brand name, copy, and product photos for a real client and it's launch
-ready except for payments and admin.

**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind · Supabase (schema
included, not required to run) · FastAPI backend stub for order/payment logic

## What's here

- `app/` — every page: home, `/shop`, `/product/[slug]`, `/cart`,
  `/checkout`, `/about`, `/contact`, `/journal`, policy pages
- `components/` — header, footer, cart drawer, product card, add-to-cart
  button, the SVG bottle placeholder art, etc.
- `lib/products.ts` — 12 seed products + collections, typed to match the
  Supabase schema below
- `lib/cart-context.tsx` — cart state (React context + localStorage), no
  backend required for the cart to work
- `supabase/schema.sql` — tables for products, collections, customers,
  orders, order_items, with RLS policies for public product reads
- `backend/` — a small FastAPI service for order creation and (later) the
  admin API, not required for the storefront to run today

## Running the frontend

```bash
npm install
npm run dev
```

Open http://localhost:3000. The site runs fully on the seed data in
`lib/products.ts` — no environment variables required to see it working.

## Connecting Supabase (optional, for real product data)

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. Insert your real products into the `products` table (same shape as
   `lib/products.ts`).
4. Copy `.env.local.example` to `.env.local` and fill in your project URL
   and anon key.
5. Swap the imports in `app/page.tsx`, `app/shop/page.tsx` and
   `app/product/[slug]/page.tsx` from `@/lib/products` to a fetch call using
   `lib/supabaseClient.ts` — the field names already line up, so it's a
   drop-in change, not a rewrite.

## Running the backend (optional, for later)

```bash
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # add your Supabase service role key
uvicorn main:app --reload --port 8000
```

The backend is a stub today — `/api/products` reads from Supabase once
configured, and `/api/orders` is left unimplemented until you add a payment
gateway (Razorpay is the common choice for India).

## Deploying (Vercel Services)

`vercel.json` at the project root is set up for [Vercel Services](https://vercel.com/docs/services), which builds the Next.js frontend and the FastAPI backend as one project on one domain:

- `/` → the Next.js frontend
- `/api/*` → the FastAPI backend (so `/api/products`, `/api/health`, etc. work with no CORS setup)

Push the repo to Vercel, add your Supabase env vars in the project settings, and deploy — no separate backend hosting needed. Since routing happens through the top-level rewrites, the `allow_origins` list in `backend/main.py` is mostly a local-dev convenience; same-origin requests in production don't need it.

## What's intentionally not built yet

- Real payments (checkout currently just clears the cart and shows a
  confirmation screen)
- Admin panel for managing products/orders — the schema and API structure
  are ready for it, per the brief that said admin comes later
- Product photography — every product uses a generated SVG bottle
  placeholder (`components/BottleGlyph.tsx`) sized and positioned like a real
  product shot, so swapping in photos later is a one-line change per card

## Design notes

Palette is warm parchment/ink/brass/oxblood rather than a generic
cream-and-terracotta template look. Display type is Fraunces, body/UI is
Karla. Copy and product names (Saffron Dusk, Vetiver Hour, Mysore Sandal
Attar, etc.) are original — replace with your actual catalogue before launch.
