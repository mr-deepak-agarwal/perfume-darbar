"use client";

import { useState } from "react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function AddToCartButton({
  product,
  quantity = 1,
  variant = "solid",
  className = "",
}: {
  product: Product;
  quantity?: number;
  variant?: "solid" | "text";
  className?: string;
}) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleClick = () => {
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  if (variant === "text") {
    return (
      <button
        onClick={handleClick}
        className={`text-sm text-ink underline decoration-brass decoration-2 underline-offset-4 transition-opacity hover:opacity-70 ${className}`}
      >
        {justAdded ? "Added to bag" : "Add to bag"}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`w-full bg-ink px-6 py-3.5 text-sm tracking-wide text-cream transition-colors hover:bg-oxblood ${className}`}
    >
      {justAdded ? "Added to bag" : "Add to bag"}
    </button>
  );
}
