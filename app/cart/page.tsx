"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import BottleGlyph from "@/components/BottleGlyph";

export default function CartPage() {
  const { lines, updateQuantity, subtotal } = useCart();
  const shipping = subtotal >= 1999 || subtotal === 0 ? 0 : 99;

  return (
    <main className="container-page py-12">
      <h1 className="font-display text-4xl text-ink">Your bag</h1>

      {lines.length === 0 ? (
        <div className="py-16">
          <p className="text-sm text-ink/60">
            Nothing here yet.{" "}
            <Link href="/shop" className="underline">
              Start with the shop
            </Link>
            .
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 md:grid-cols-[1fr,320px]">
          <ul className="flex flex-col divide-y divide-ink/10">
            {lines.map((line) => (
              <li key={line.productId} className="flex gap-5 py-6">
                <div className="h-28 w-24 flex-shrink-0" style={{ backgroundColor: line.hue[0] }}>
                  <BottleGlyph id={`fullcart-${line.productId}`} hue={line.hue} className="h-full w-full" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <Link href={`/product/${line.slug}`} className="font-display text-lg">
                        {line.name}
                      </Link>
                      <p className="text-xs text-ink/50">{line.size}</p>
                    </div>
                    <p className="text-sm font-medium">{formatPrice(line.price * line.quantity)}</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <button
                      onClick={() => updateQuantity(line.productId, line.quantity - 1)}
                      className="h-8 w-8 border border-ink/20 hover:border-ink"
                    >
                      −
                    </button>
                    <span>{line.quantity}</span>
                    <button
                      onClick={() => updateQuantity(line.productId, line.quantity + 1)}
                      className="h-8 w-8 border border-ink/20 hover:border-ink"
                    >
                      +
                    </button>
                    <button
                      onClick={() => updateQuantity(line.productId, 0)}
                      className="ml-3 text-xs text-ink/50 underline hover:text-ink"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="h-fit border border-ink/15 p-6">
            <h2 className="font-display text-xl">Order summary</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-ink/60">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink/60">Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between border-t border-ink/15 pt-4 text-base font-medium">
              <span>Total</span>
              <span>{formatPrice(subtotal + shipping)}</span>
            </div>
            <Link
              href="/checkout"
              className="mt-6 block w-full bg-ink px-6 py-3.5 text-center text-sm tracking-wide text-cream hover:bg-oxblood"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
