import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import { products, collections } from "@/lib/products";

const bestsellers = products.filter((p) => p.badge === "Bestseller" || p.rating >= 4.8).slice(0, 6);

const process = [
  {
    step: "01",
    title: "Sourcing",
    text: "Saffron from Kashmir, sandalwood from Mysore, oud from Assam — bought direct from growers each harvest.",
  },
  {
    step: "02",
    title: "Blending",
    text: "Every formula is mixed by hand in batches of under 40 litres, tested across a week of wear before it's approved.",
  },
  {
    step: "03",
    title: "Aging",
    text: "Eau de parfum rests for four weeks; attars are aged for months in sealed copper before bottling.",
  },
  {
    step: "04",
    title: "Bottling",
    text: "Filled, labelled and boxed in our Jaipur studio, the same week an order ships.",
  },
];

const testimonials = [
  {
    quote:
      "Saffron Dusk is the first perfume that's made me stop mid-conversation to ask what someone's wearing — except it was me.",
    name: "Rhea M.",
    city: "Mumbai",
  },
  {
    quote:
      "The Mysore attar smells like the inside of my grandmother's almirah. In the best way. It's the real thing.",
    name: "Arjun K.",
    city: "Bengaluru",
  },
  {
    quote:
      "Ordered the Discovery Set expecting to like one. Kept all five. Vetiver Hour lives on my desk now.",
    name: "Naina S.",
    city: "Delhi",
  },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="container-page py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl text-ink">Shop by collection</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/shop?collection=${c.slug}`}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden p-5"
              style={{
                background: `linear-gradient(160deg, ${c.hue[0]}, ${c.hue[1]})`,
              }}
            >
              <h3 className="font-display text-xl text-cream">{c.name}</h3>
              <p className="mt-1 text-xs text-cream/75">{c.description}</p>
              <span className="mt-3 text-xs text-cream underline decoration-cream/40 underline-offset-4 group-hover:decoration-cream">
                Shop now
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rule bg-parchment2 py-16">
        <div className="container-page">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl text-ink">Most worn</h2>
            <Link href="/shop" className="text-sm text-ink/60 underline hover:text-ink">
              View all
            </Link>
          </div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-[0.9fr,1.1fr] md:items-start">
          <div>
            <p className="text-sm text-brass">How it's made</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              Four steps between a harvest and a bottle.
            </h2>
            <p className="mt-4 max-w-sm text-sm text-ink/65">
              We keep the supply chain short enough that we can name the farm most of our raw
              materials came from.
            </p>
          </div>
          <ol className="grid gap-8 sm:grid-cols-2">
            {process.map((p) => (
              <li key={p.step} className="border-t border-ink/15 pt-4">
                <span className="font-display text-sm text-brass">{p.step}</span>
                <h3 className="mt-1 font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rule bg-ink py-16 text-cream">
        <div className="container-page">
          <h2 className="font-display text-3xl">What people say after the first wear</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border-t border-cream/20 pt-5">
                <blockquote className="font-display text-lg leading-snug text-cream/95">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 text-xs text-cream/60">
                  {t.name} · {t.city}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
