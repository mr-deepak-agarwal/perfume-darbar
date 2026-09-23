"use client";

import { useMemo, useState } from "react";
import { products, collections, Product } from "@/lib/products";
import ProductCard from "./ProductCard";

const categories = ["Eau de Parfum", "Attar", "Body Mist", "Gift Set"] as const;
const genders = ["Her", "Him", "Unisex"] as const;
type SortKey = "featured" | "price-asc" | "price-desc" | "rating";

export default function ShopClient({
  initialCategory,
  initialGender,
  initialCollection,
}: {
  initialCategory?: string;
  initialGender?: string;
  initialCollection?: string;
}) {
  const [category, setCategory] = useState<string | null>(initialCategory ?? null);
  const [gender, setGender] = useState<string | null>(initialGender ?? null);
  const [collection, setCollection] = useState<string | null>(initialCollection ?? null);
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    let list: Product[] = products.filter((p) => {
      if (category && p.category !== category) return false;
      if (gender && p.gender !== gender) return false;
      if (collection && p.collection !== collection) return false;
      return true;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [category, gender, collection, sort]);

  const clearAll = () => {
    setCategory(null);
    setGender(null);
    setCollection(null);
  };

  return (
    <div className="container-page grid gap-10 py-10 md:grid-cols-[220px,1fr]">
      <aside className="flex flex-col gap-8">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs text-ink/50">Category</p>
            {(category || gender || collection) && (
              <button onClick={clearAll} className="text-xs text-brass underline">
                Clear
              </button>
            )}
          </div>
          <ul className="flex flex-col gap-2 text-sm">
            {categories.map((c) => (
              <li key={c}>
                <button
                  onClick={() => setCategory(category === c ? null : c)}
                  className={`text-left ${category === c ? "text-ink font-medium" : "text-ink/60 hover:text-ink"}`}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs text-ink/50">Made for</p>
          <ul className="flex flex-col gap-2 text-sm">
            {genders.map((g) => (
              <li key={g}>
                <button
                  onClick={() => setGender(gender === g ? null : g)}
                  className={`text-left ${gender === g ? "text-ink font-medium" : "text-ink/60 hover:text-ink"}`}
                >
                  {g}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs text-ink/50">Collection</p>
          <ul className="flex flex-col gap-2 text-sm">
            {collections.map((c) => (
              <li key={c.slug}>
                <button
                  onClick={() => setCollection(collection === c.slug ? null : c.slug)}
                  className={`text-left ${collection === c.slug ? "text-ink font-medium" : "text-ink/60 hover:text-ink"}`}
                >
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div>
        <div className="mb-6 flex items-center justify-between border-b border-ink/10 pb-4">
          <p className="text-sm text-ink/60">{filtered.length} fragrances</p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-ink/20 bg-transparent px-3 py-2 text-sm"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="rating">Highest rated</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-sm text-ink/60">
            Nothing matches those filters yet. Try clearing one.
          </p>
        ) : (
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
