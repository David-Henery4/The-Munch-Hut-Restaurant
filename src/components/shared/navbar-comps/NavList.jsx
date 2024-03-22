"use client";
import navLinks from "@/link-list-data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavList = () => {
  const pathname = usePathname();
  //
  return (
    <menu className="hidden tab:flex justify-center items-center gap-6 text-sm font-light">
      {navLinks.map((linkItem) => {
        const isActive = pathname === linkItem?.route;
        return (
          <li
            key={linkItem?.id}
            className={`hover:text-red ${isActive ? "text-red" : "text-white"}`}
          >
            <Link href={linkItem?.route}>{linkItem?.label}</Link>
          </li>
        );
      })}
    </menu>
  );
};

export default NavList;
