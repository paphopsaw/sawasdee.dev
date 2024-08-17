export default function Hero() {
  const greeting = "Hello, I'm Stock Sawasdee.";
  const subtitle = "A software engineer based in Yokohama, Japan";
  return (
    <section>
      <h1>{greeting}</h1>
      <h2 className="text-2xl sm:text-3xl">{subtitle}</h2>
    </section>
  );
}
