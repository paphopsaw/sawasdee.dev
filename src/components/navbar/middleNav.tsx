"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MiddleNav({
  links,
}: {
  links: { link: string; title: string }[];
}) {
  const pathname = usePathname();
  return (
    <ul className="flex justify-center items-center space-x-4 sm:space-x-8">
      {links.map((item) => {
        return (
          <li
            className={`hover:border-b-2 hover:border-neutral-400 ${
              pathname.includes(item.link)
                ? "border-b-2 border-neutral-600"
                : ""
            }`}
            key={item.link}
          >
            <Link href={item.link}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
