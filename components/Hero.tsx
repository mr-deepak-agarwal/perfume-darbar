import Link from "next/link";
import BottleGlyph from "./BottleGlyph";

export default function Hero() {
  return (
    <section className="border-b border-ink/10 bg-parchment">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="text-sm text-brass">Small-batch, blended in Jaipur</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-ink md:text-6xl">
            Fragrance, kept as a record of where you've been.
          </h1>
          <p className="mt-6 max-w-md text-base text-ink/70">
            Twelve blends built from saffron, oud, vetiver and Taif rose — some poured as eau de
            parfum, some as traditional oil attars. No two batches are rushed.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-ink px-7 py-3.5 text-sm tracking-wide text-cream hover:bg-oxblood"
            >
              Shop the collection
            </Link>
            <Link
              href="/shop?category=Attar"
              className="border border-ink px-7 py-3.5 text-sm tracking-wide text-ink hover:bg-ink hover:text-cream"
            >
              Explore the attars
            </Link>
          </div>
        </div>
        <div
          className="relative flex aspect-[4/5] items-center justify-center md:aspect-square"
          style={{ backgroundColor: "#1C1712" }}
        >
          <BottleGlyph id="hero" hue={["#3A2318", "#C79A55"]} className="h-3/5 w-auto" />
          <p className="absolute bottom-6 left-6 max-w-[160px] text-xs text-cream/70">
            Saffron Dusk — the house signature, poured since 2019.
          </p>
        </div>
      </div>
    </section>
  );
}
