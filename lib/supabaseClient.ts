import { createClient } from "@supabase/supabase-js";

// The storefront currently reads from lib/products.ts (static seed data) so the
// site works out of the box with no Supabase project connected. Once your
// `products` table is populated (see supabase/schema.sql), swap the imports in
// app/shop, app/product/[slug] etc. from "@/lib/products" to fetch calls using
// this client — the field names already match the table columns.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export function isSupabaseConfigured() {
  return Boolean(supabase);
}
