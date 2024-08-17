import Hero from "@/components/hero";
import Button from "@/components/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-20 sm:p-24">
      <Hero />
      <Button text="About me" />
    </main>
  );
}
