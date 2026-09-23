export const metadata = { title: "Our story — Antara" };

export default function AboutPage() {
  return (
    <main>
      <div className="border-b border-ink/10 bg-parchment2 py-16">
        <div className="container-page max-w-2xl">
          <p className="text-sm text-brass">Our story</p>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            We started with one attar and a stubborn idea about what "long-lasting" should mean.
          </h1>
        </div>
      </div>

      <div className="container-page grid gap-10 py-16 md:grid-cols-[1fr,1fr]">
        <div className="flex flex-col gap-5 text-sm leading-relaxed text-ink/75">
          <p>
            Antara began in a one-room studio in Jaipur in 2019, blending a single sandalwood
            attar in batches small enough to test by hand. The founders were tired of fragrance
            that faded by lunch and marketing that promised more than the bottle delivered.
          </p>
          <p>
            Every blend since has followed the same rule: source the raw material as close to the
            farm as possible, formulate at a strength that actually lasts, and say exactly what's
            in the bottle. No inspired-by claims, no invented backstories — just the notes, the
            concentration, and how long it wears.
          </p>
          <p>
            Today the studio makes twelve fragrances across eau de parfum and traditional oil
            attars, still blended and bottled in Jaipur, still tested on real skin before anything
            ships.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="border border-ink/15 p-6">
            <p className="font-display text-2xl text-brass">2019</p>
            <p className="mt-1 text-sm text-ink/65">First batch of Mysore Sandal Attar, 40 bottles.</p>
          </div>
          <div className="border border-ink/15 p-6">
            <p className="font-display text-2xl text-brass">12</p>
            <p className="mt-1 text-sm text-ink/65">Fragrances in the current collection.</p>
          </div>
          <div className="border border-ink/15 p-6">
            <p className="font-display text-2xl text-brass">100%</p>
            <p className="mt-1 text-sm text-ink/65">Blended and bottled in-house, Jaipur.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
