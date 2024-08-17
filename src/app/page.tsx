import Hero from "@/components/hero";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Hero></Hero>
      <Profile></Profile>
    </main>
  );
}
