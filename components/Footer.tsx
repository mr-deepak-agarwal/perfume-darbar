import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-parchment2">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-xl">Antara</p>
          <p className="mt-3 max-w-[220px] text-sm text-ink/60">
            Fragrance made in small batches from Jaipur, sent across India.
          </p>
        </div>
        <div>
          <p className="text-xs text-ink/50">Shop</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li><Link href="/shop" className="hover:underline">All fragrances</Link></li>
            <li><Link href="/shop?category=Attar" className="hover:underline">Attars</Link></li>
            <li><Link href="/shop?category=Gift+Set" className="hover:underline">Gift sets</Link></li>
            <li><Link href="/shop?gender=Him" className="hover:underline">For him</Link></li>
            <li><Link href="/shop?gender=Her" className="hover:underline">For her</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs text-ink/50">Studio</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li><Link href="/about" className="hover:underline">Our story</Link></li>
            <li><Link href="/journal" className="hover:underline">Journal</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs text-ink/50">Get in touch</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-ink/70">
            <li>hello@antaraparfum.in</li>
            <li>+91 98765 43210</li>
            <li>Jaipur, Rajasthan</li>
          </ul>
        </div>
      </div>
      <div className="rule">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Antara Parfum. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:underline">Privacy</Link>
            <Link href="/shipping-policy" className="hover:underline">Shipping</Link>
            <Link href="/refund-policy" className="hover:underline">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
