"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

export default function CheckoutPage() {
  const { lines, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const shipping = subtotal >= 1999 || subtotal === 0 ? 0 : 99;

  if (placed) {
    return (
      <main className="container-page flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="font-display text-4xl text-ink">Order received</h1>
        <p className="mt-3 max-w-md text-sm text-ink/65">
          This is a portfolio template, so no payment was actually charged. In production, this
          step hands off to a payment gateway (Razorpay/Stripe) and writes the order to Supabase.
        </p>
        <Link href="/shop" className="mt-8 border border-ink px-6 py-3 text-sm hover:bg-ink hover:text-cream">
          Continue shopping
        </Link>
      </main>
    );
  }

  if (lines.length === 0) {
    return (
      <main className="container-page py-20 text-center">
        <p className="text-sm text-ink/60">
          Your bag is empty.{" "}
          <Link href="/shop" className="underline">
            Go find something
          </Link>
          .
        </p>
      </main>
    );
  }

  return (
    <main className="container-page py-12">
      <h1 className="font-display text-4xl text-ink">Checkout</h1>
      <div className="mt-10 grid gap-12 md:grid-cols-[1fr,360px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPlaced(true);
            clearCart();
          }}
          className="flex flex-col gap-10"
        >
          <fieldset>
            <legend className="font-display text-xl">Shipping details</legend>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <input required placeholder="Full name" className="border border-ink/20 px-4 py-3 text-sm sm:col-span-2" />
              <input required type="email" placeholder="Email" className="border border-ink/20 px-4 py-3 text-sm sm:col-span-2" />
              <input required placeholder="Phone" className="border border-ink/20 px-4 py-3 text-sm sm:col-span-2" />
              <input required placeholder="Address" className="border border-ink/20 px-4 py-3 text-sm sm:col-span-2" />
              <input required placeholder="City" className="border border-ink/20 px-4 py-3 text-sm" />
              <input required placeholder="PIN code" className="border border-ink/20 px-4 py-3 text-sm" />
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-display text-xl">Payment</legend>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <label className="flex items-center gap-3 border border-ink/20 px-4 py-3">
                <input type="radio" name="payment" defaultChecked />
                UPI / Cards / Netbanking
              </label>
              <label className="flex items-center gap-3 border border-ink/20 px-4 py-3">
                <input type="radio" name="payment" />
                Cash on delivery
              </label>
            </div>
          </fieldset>

          <button type="submit" className="bg-ink px-6 py-3.5 text-sm tracking-wide text-cream hover:bg-oxblood">
            Place order
          </button>
        </form>

        <div className="h-fit border border-ink/15 p-6">
          <h2 className="font-display text-xl">Order summary</h2>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {lines.map((line) => (
              <li key={line.productId} className="flex justify-between">
                <span className="text-ink/70">
                  {line.name} × {line.quantity}
                </span>
                <span>{formatPrice(line.price * line.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-ink/15 pt-4 text-sm">
            <span className="text-ink/60">Shipping</span>
            <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
          </div>
          <div className="mt-2 flex justify-between text-base font-medium">
            <span>Total</span>
            <span>{formatPrice(subtotal + shipping)}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
