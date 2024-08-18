import Hero from "@/components/hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Link
        className="text-lg sm:text-xl rounded-3xl px-5 py-3 bg-slate-600 hover:bg-slate-400 text-slate-50"
        href="/about"
      >
        About me
      </Link>
    </main>
  );
}
