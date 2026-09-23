"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import BottleGlyph from "./BottleGlyph";

export default function CartDrawer() {
  const { lines, isOpen, closeCart, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        className="absolute inset-0 bg-ink/50"
        onClick={closeCart}
        aria-label="Close cart"
      />
      <div className="relative flex h-full w-full max-w-md flex-col bg-parchment">
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-display text-xl">Your bag</h2>
          <button onClick={closeCart} className="text-sm text-ink/60 hover:text-ink">
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <p className="mt-8 text-sm text-ink/60">
              Your bag is empty. Fragrance is better tried than described —{" "}
              <Link href="/shop" onClick={closeCart} className="underline">
                browse the shop
              </Link>
              .
            </p>
          ) : (
            <ul className="flex flex-col gap-5">
              {lines.map((line) => (
                <li key={line.productId} className="flex gap-4">
                  <div className="h-20 w-16 flex-shrink-0" style={{ backgroundColor: line.hue[0] }}>
                    <BottleGlyph id={`cart-${line.productId}`} hue={line.hue} className="h-full w-full" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-display text-base leading-tight">{line.name}</p>
                        <p className="text-xs text-ink/50">{line.size}</p>
                      </div>
                      <p className="text-sm">{formatPrice(line.price * line.quantity)}</p>
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-sm">
                      <button
                        onClick={() => updateQuantity(line.productId, line.quantity - 1)}
                        className="h-7 w-7 border border-ink/20 hover:border-ink"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{line.quantity}</span>
                      <button
                        onClick={() => updateQuantity(line.productId, line.quantity + 1)}
                        className="h-7 w-7 border border-ink/20 hover:border-ink"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        onClick={() => updateQuantity(line.productId, 0)}
                        className="ml-2 text-xs text-ink/50 underline hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-ink/60">Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full bg-ink px-6 py-3.5 text-center text-sm tracking-wide text-cream hover:bg-oxblood"
            >
              Checkout
            </Link>
            <Link
              href="/cart"
              onClick={closeCart}
              className="mt-3 block text-center text-xs text-ink/60 underline"
            >
              View full bag
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
