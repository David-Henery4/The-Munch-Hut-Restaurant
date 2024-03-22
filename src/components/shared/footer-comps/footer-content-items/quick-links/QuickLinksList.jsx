"use client"
import navLinks from "@/link-list-data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const QuickLinksList = () => {
  const pathname = usePathname();
  //
  return (
    <menu className="grid gap-2 mt-4">
      {navLinks.map((linkItem) => {
        const isActive = pathname === linkItem?.route;
        return (
          <li key={linkItem?.id}>
            <Link
              className={`hover:text-red ${
                isActive ? "text-red" : "text-white"
              }`}
              href={linkItem?.route}
            >
              {linkItem?.label}
            </Link>
          </li>
        );
      })}
    </menu>
  );
}

export default QuickLinksList