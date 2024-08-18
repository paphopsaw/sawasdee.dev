import Hero from "@/components/hero";
import Button from "@/components/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Button text="About me" />
    </main>
  );
}
