import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";
import BottleGlyph from "./BottleGlyph";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col">
      <Link href={`/product/${product.slug}`} className="block">
        <div
          className="relative flex aspect-[4/5] items-center justify-center overflow-hidden"
          style={{ backgroundColor: product.hue[0] }}
        >
          {product.badge && (
            <span className="absolute left-3 top-3 bg-cream px-2 py-1 text-[11px] tracking-wide text-ink">
              {product.badge}
            </span>
          )}
          <BottleGlyph
            id={product.slug}
            hue={product.hue}
            className="h-3/4 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="mt-3 flex-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-display text-lg text-ink">{product.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-ink/65">{product.tagline}</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-sm font-medium text-ink">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-xs text-ink/40 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
          <span className="text-xs text-ink/40">· {product.size}</span>
        </div>
      </div>
      <AddToCartButton product={product} variant="text" className="mt-3 self-start" />
    </div>
  );
}
