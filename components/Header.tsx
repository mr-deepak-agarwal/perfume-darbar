"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/shop", label: "Shop all" },
  { href: "/shop?category=Attar", label: "Attars" },
  { href: "/shop?category=Gift+Set", label: "Gifting" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "Our story" },
];

export default function Header() {
  const { itemCount, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-parchment/95 backdrop-blur">
      <div className="border-b border-ink/10 bg-ink py-2 text-center text-xs tracking-wide text-cream/90">
        Complimentary shipping across India on orders above ₹1,999
      </div>
      <div className="container-page flex h-20 items-center justify-between">
        <button
          className="text-sm md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <Link href="/" className="font-display text-2xl tracking-wide text-ink">
          Antara
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-ink/75 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-sm">
          <Link href="/contact" className="hidden text-ink/75 hover:text-ink md:inline">
            Contact
          </Link>
          <button onClick={openCart} className="relative text-ink" aria-label="Open cart">
            Bag
            {itemCount > 0 && (
              <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center bg-oxblood px-1 text-xs text-cream">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="container-page flex flex-col gap-4 border-t border-ink/10 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-ink/75"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-sm text-ink/75">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
