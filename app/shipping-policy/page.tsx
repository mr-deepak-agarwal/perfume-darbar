export const metadata = { title: "Shipping policy — Antara" };

export default function ShippingPolicyPage() {
  return (
    <main className="container-page max-w-2xl py-16">
      <h1 className="font-display text-4xl text-ink">Shipping policy</h1>
      <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-ink/70">
        <p>Placeholder page — replace with your real shipping terms before launch. Suggested content:</p>
        <ul className="list-disc pl-5">
          <li>Dispatch time (e.g. within 2 business days)</li>
          <li>Delivery estimate by region</li>
          <li>Shipping fee and the free-shipping threshold</li>
          <li>Courier partners used</li>
        </ul>
      </div>
    </main>
  );
}
