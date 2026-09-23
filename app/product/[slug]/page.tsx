import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getRelatedProducts, formatPrice, products } from "@/lib/products";
import BottleGlyph from "@/components/BottleGlyph";
import ProductDetailClient from "@/components/ProductDetailClient";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <main className="container-page py-10">
      <nav className="mb-8 text-xs text-ink/50">
        <Link href="/shop" className="hover:underline">
          Shop
        </Link>{" "}
        / {product.name}
      </nav>

      <div className="grid gap-12 md:grid-cols-2">
        <div
          className="flex aspect-square items-center justify-center"
          style={{ backgroundColor: product.hue[0] }}
        >
          <BottleGlyph id={`detail-${product.slug}`} hue={product.hue} className="h-3/4 w-auto" />
        </div>

        <div>
          {product.badge && (
            <span className="bg-oxblood px-2 py-1 text-[11px] tracking-wide text-cream">
              {product.badge}
            </span>
          )}
          <h1 className="mt-3 font-display text-4xl text-ink">{product.name}</h1>
          <p className="mt-2 text-base text-ink/65">{product.tagline}</p>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-xl font-medium">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-sm text-ink/40 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            <span className="text-sm text-ink/50">{product.size}</span>
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-ink/60">
            <span>★ {product.rating.toFixed(1)}</span>
            <span>· {product.reviewCount} reviews</span>
            <span>· {product.longevity} longevity</span>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 border-y border-ink/15 py-5 text-xs">
            <div>
              <p className="text-ink/45">Top</p>
              <p className="mt-1 text-ink/80">{product.notes.top.join(", ")}</p>
            </div>
            <div>
              <p className="text-ink/45">Heart</p>
              <p className="mt-1 text-ink/80">{product.notes.heart.join(", ")}</p>
            </div>
            <div>
              <p className="text-ink/45">Base</p>
              <p className="mt-1 text-ink/80">{product.notes.base.join(", ")}</p>
            </div>
          </div>

          <div className="mt-6">
            <ProductDetailClient product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 font-display text-2xl text-ink">You might also wear</h2>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
