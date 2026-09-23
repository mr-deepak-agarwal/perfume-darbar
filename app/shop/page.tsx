import ShopClient from "@/components/ShopClient";

export const metadata = { title: "Shop — Antara" };

export default function ShopPage({
  searchParams,
}: {
  searchParams: { category?: string; gender?: string; collection?: string };
}) {
  return (
    <main>
      <div className="border-b border-ink/10 bg-parchment2 py-10">
        <div className="container-page">
          <p className="text-sm text-brass">The full collection</p>
          <h1 className="mt-2 font-display text-4xl text-ink">Shop all fragrances</h1>
        </div>
      </div>
      <ShopClient
        initialCategory={searchParams.category}
        initialGender={searchParams.gender}
        initialCollection={searchParams.collection}
      />
    </main>
  );
}
