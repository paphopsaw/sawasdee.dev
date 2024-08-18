import Github from "@/assets/icons/github";
import Linkedin from "@/assets/icons/linkedin";
import Link from "next/link";
import MiddleNav from "./middleNav";

const logoSize = 20;

export default function Navbar() {
  const links = [
    { link: "/blog", title: "Blog" },
    { link: "/about", title: "About" },
  ];

  const homeLink = { link: "/", title: "Stock Sawasdee" };

  const githubLink = "https://github.com/paphopsaw";
  const linkedinLink = "https://www.linkedin.com/in/paphopsaw/";

  return (
    <nav className="flex justify-between items-center bg-slate-50 h-14 sm:h-16 text-slate-800 sticky top-0">
      {/* Home */}
      <Link className="font-bold p-2 sm:p-4" href="/">
        Stock Sawasdee
      </Link>
      {/* Middle */}
      <MiddleNav links={links} />
      {/* Contact */}
      <div className="flex justify-end items-center space-x-4 sm:space-x-6 pr-2 sm:pr-4">
        <Link href={linkedinLink}>
          <Linkedin size={logoSize} />
        </Link>
        <Link href={githubLink}>
          <Github size={logoSize} />
        </Link>
      </div>
    </nav>
  );
}
