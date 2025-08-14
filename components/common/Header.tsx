import Link from "next/link";
import React from "react";
import NavLink from "./ui/NavLink";
import { TiThMenu } from "react-icons/ti";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center ">
      <Link href={`/`} className="text-sky-600 font-semibold">Phinehas.</Link>
      <nav>
        <ul className="hidden md:flex items-center gap-3">
          <NavLink name="Home" route="/" />
          <NavLink name="About" route="/about" />
          <NavLink name="Experience" route="/experience" />
          <NavLink name="Projects" route="/projects" />
          <NavLink name="Contact" route="/contact" />
        </ul>
      </nav>
      <a
        href="https://drive.google.com/file/d/1rmYJQtnymB10D5acQg4fDUsMnifZ6Gg8/view?usp=sharing"
        className="border border-gray-500 text-xs rounded-md p-2 hidden md:block"
        target="_blank"
      >
        Download CV
      </a>
      <TiThMenu size={25} color="gray" className="block md:hidden" />
    </header>
  );
};

export default Header;
