"use client";
import Link from "next/link";
import Hamburger from "@/assets/hamburger";
import { useState } from "react";
import NavbarModal from "./modal";

const hamburgerSize = 20;
const hamburgerColor = "#0f172a";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { link: "/blogs", title: "Blogs" },
    { link: "/contact", title: "Contact" },
  ];

  const homeLink = { link: "/", title: "Stock Sawasdee" };

  return (
    <nav className="flex justify-between items-center bg-slate-50 text-slate-800 sticky top-0">
      <Link className="p-2 sm:p-4" href={homeLink.link}>
        {homeLink.title}
      </Link>
      <div className="flex justify-end items-center h-12 sm:hidden">
        <button
          className="p-2 m-2 rounded-lg hover:bg-slate-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger size={hamburgerSize} color={hamburgerColor}></Hamburger>
          <NavbarModal links={links} isOpen={isOpen}></NavbarModal>
        </button>
      </div>
      <div className="hidden sm:flex justify-center p-2 sm:p-4 h-14 items-center">
        <ul className="hidden sm:flex justify-end items-center space-x-10 h-14">
          {links.map((item) => {
            return (
              <li key={item.link}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
