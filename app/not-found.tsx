import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-page flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <h1 className="font-display text-4xl text-ink">Page not found</h1>
      <p className="mt-3 text-sm text-ink/60">The page you're looking for doesn't exist.</p>
      <Link href="/" className="mt-8 border border-ink px-6 py-3 text-sm hover:bg-ink hover:text-cream">
        Back to home
      </Link>
    </main>
  );
}
