import Link from "next/link";

type LinkItem = {
  link: string;
  title: string;
};

export default function NavbarModal({
  isOpen,
  links,
}: {
  isOpen: boolean;
  links: LinkItem[];
}) {
  return (
    <div
      className={`${
        isOpen ? "absolute" : "hidden"
      } top-12 left-0 w-full h-[calc(100vh-48px)]
        flex flex-row-reverse 
        bg-white/0 items-start`}
    >
      <ul className="text-black w-32 flex flex-col items-start m-2 rounded bg-slate-100">
        {links.map((item) => {
          return (
            <li key={item.link}>
              <Link
                href={item.link}
                className="h-12 pl-4 flex items-center hover:underline"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
