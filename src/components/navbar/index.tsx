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
    <nav className="flex flex-col justify-center items-center bg-slate-50 h-14 sm:h-16 text-slate-800 sticky top-0">
      <div className="flex justify-between items-center w-full max-w-screen-md px-4 sm:px-8">
        {/* Home */}
        <Link className="font-bold" href="/">
          Stock Sawasdee
        </Link>
        {/* Middle */}
        <MiddleNav links={links} />
        {/* Contact */}
        <div className="flex justify-end items-center space-x-4 sm:space-x-6">
          <Link href={linkedinLink}>
            <Linkedin className="hover:opacity-50" size={logoSize} />
          </Link>
          <Link href={githubLink}>
            <Github className="hover:opacity-50" size={logoSize} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
