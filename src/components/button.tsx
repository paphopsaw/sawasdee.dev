export default function Button({ text }: { text: string }) {
  return (
    <button className="rounded-3xl px-5 py-3 bg-slate-600 hover:bg-slate-400 text-slate-50">
      {text}
    </button>
  );
}
