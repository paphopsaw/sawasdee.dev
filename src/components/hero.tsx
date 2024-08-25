export default function Hero() {
  const greeting = "Hello, I'm Stock Sawasdee.";
  const subtitle = "I'm a software engineer based in Yokohama, Japan.";
  return (
    <section className="p-6 sm:p-10 mb-10 sm:mb-12">
      <h1 className="text-6xl sm:text-7xl">{greeting}</h1>
      <h3>{subtitle}</h3>
    </section>
  );
}
