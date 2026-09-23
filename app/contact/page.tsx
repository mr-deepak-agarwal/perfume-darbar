"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="container-page grid gap-12 py-16 md:grid-cols-2">
      <div>
        <p className="text-sm text-brass">Get in touch</p>
        <h1 className="mt-3 font-display text-4xl text-ink">Questions before you order?</h1>
        <p className="mt-4 max-w-sm text-sm text-ink/65">
          Write in about notes, longevity, or a bulk/gifting order — we reply within a business
          day.
        </p>
        <div className="mt-8 flex flex-col gap-2 text-sm text-ink/75">
          <p>hello@antaraparfum.in</p>
          <p>+91 98765 43210</p>
          <p>10am – 6pm, Monday to Saturday</p>
          <p>Jaipur, Rajasthan, India</p>
        </div>
      </div>

      {sent ? (
        <div className="flex h-fit flex-col gap-2 border border-ink/15 p-8">
          <h2 className="font-display text-xl">Message sent</h2>
          <p className="text-sm text-ink/65">We'll get back to you at the email you left.</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="flex flex-col gap-4"
        >
          <input required placeholder="Name" className="border border-ink/20 px-4 py-3 text-sm" />
          <input required type="email" placeholder="Email" className="border border-ink/20 px-4 py-3 text-sm" />
          <textarea required placeholder="Message" rows={5} className="border border-ink/20 px-4 py-3 text-sm" />
          <button type="submit" className="w-fit bg-ink px-6 py-3.5 text-sm tracking-wide text-cream hover:bg-oxblood">
            Send message
          </button>
        </form>
      )}
    </main>
  );
}
