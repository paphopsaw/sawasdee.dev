import Link from "next/link";

type PostListItem = {
  postDir: string;
  title: string;
  description: string;
  date: Date;
};

function renderDate(date: Date): string {
  return `  ${date.toLocaleString("default", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })}`;
}

export default function PostListItem({
  postDir,
  title,
  description,
  date,
}: PostListItem) {
  return (
    <div>
      <Link
        href={`blog/${postDir}`}
        className="flex flex-col justify-between text-black hover:border-0 hover:"
      >
        <div className="flex flex-row justify-between items-baseline">
          <h3>{title}</h3>
          {date ? <p className="m-0 italic">{renderDate(date)}</p> : null}
        </div>
        <p className="text-neutral-500">{description}</p>
      </Link>
      <hr></hr>
    </div>
  );
}
