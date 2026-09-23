export const metadata = { title: "Journal — Antara" };

const articles = [
  {
    title: "Attar vs. eau de parfum: what's actually different",
    excerpt:
      "Both start with the same raw materials. The difference is the carrier — oil versus alcohol — and what that does to how a scent sits on skin.",
    tag: "Guide",
  },
  {
    title: "Why Mysore sandalwood costs what it costs",
    excerpt:
      "A single tree takes 15 years to mature enough for distillation. A short walk through why real sandalwood attar isn't cheap, and how to spot the synthetic stuff.",
    tag: "Sourcing",
  },
  {
    title: "How to layer fragrance without muddying it",
    excerpt:
      "A body mist under an eau de parfum, an attar dabbed at the pulse points — three combinations from our own collection that actually work.",
    tag: "Guide",
  },
];

export default function JournalPage() {
  return (
    <main className="container-page py-16">
      <p className="text-sm text-brass">Journal</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Field notes from the blending table</h1>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {articles.map((a) => (
          <article key={a.title} className="border-t border-ink/15 pt-5">
            <p className="text-xs text-ink/45">{a.tag}</p>
            <h2 className="mt-2 font-display text-xl leading-snug text-ink">{a.title}</h2>
            <p className="mt-3 text-sm text-ink/65">{a.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
