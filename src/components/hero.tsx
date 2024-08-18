export default function Hero() {
  const greeting = "Hello, I'm Stock Sawasdee.";
  const subtitle = "I'm a software engineer based in Yokohama, Japan.";
  return (
    <section className="p-6 sm:p-10 mb-10 sm:mb-12">
      <h1 className="pb-4 sm:pb-8">{greeting}</h1>
      <h6>{subtitle}</h6>
    </section>
  );
}
