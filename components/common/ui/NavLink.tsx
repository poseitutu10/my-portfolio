import { NavLinkProps } from "@/interfaces";
import Link from "next/link";
import React from "react";

const NavLink: React.FC<NavLinkProps> = ({ name, route }) => {
  return (
    <li className="text-sm">
      <Link href={route}>{name}</Link>
    </li>
  );
};

export default NavLink;
