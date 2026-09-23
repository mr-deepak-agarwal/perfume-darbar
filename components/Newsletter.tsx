"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-ink py-16 text-cream">
      <div className="container-page grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Notes before they launch</h2>
          <p className="mt-3 max-w-sm text-sm text-cream/70">
            One email a month — new blends before they're listed, and the occasional field note
            from the blending table.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 border border-cream/30 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-cream"
          />
          <button
            type="submit"
            className="border border-cream px-6 py-3 text-sm tracking-wide text-cream hover:bg-cream hover:text-ink"
          >
            {submitted ? "Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
