import Hero from "@/components/hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Link
        className="text-lg sm:text-xl rounded-3xl px-5 py-3 bg-primary-600 hover:bg-primary-400 dark:bg-secondary-600 hover:bg-secondary-400 hover:border-0 text-neutral-50"
        href="/about"
      >
        About me
      </Link>
    </main>
  );
}
