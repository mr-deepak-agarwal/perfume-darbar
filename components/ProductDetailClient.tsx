"use client";

import { useState } from "react";
import { Product } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";

const accordionSections = (product: Product) => [
  { title: "Description", body: product.description },
  {
    title: "Notes",
    body: `Top: ${product.notes.top.join(", ")}. Heart: ${product.notes.heart.join(", ")}. Base: ${product.notes.base.join(", ")}.`,
  },
  {
    title: "Shipping & returns",
    body: "Dispatched within 2 business days. Delivery across India in 3–6 days. Unopened bottles can be returned within 14 days of delivery.",
  },
];

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState<string | null>("Description");

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <div className="flex items-center border border-ink/20">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="h-11 w-11 hover:bg-ink/5"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="h-11 w-11 hover:bg-ink/5"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <AddToCartButton product={product} quantity={quantity} className="flex-1" />
      </div>

      <div className="mt-10 flex flex-col">
        {accordionSections(product).map((section) => {
          const isOpen = openSection === section.title;
          return (
            <div key={section.title} className="border-t border-ink/15 py-4">
              <button
                onClick={() => setOpenSection(isOpen ? null : section.title)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="font-display text-base">{section.title}</span>
                <span className="text-ink/50">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className="mt-3 text-sm leading-relaxed text-ink/70">{section.body}</p>}
            </div>
          );
        })}
        <div className="border-t border-ink/15" />
      </div>
    </div>
  );
}
