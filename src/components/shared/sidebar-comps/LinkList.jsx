import navLinks from "@/link-list-data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkList = ({ setIsSidebarOpen }) => {
  const pathname = usePathname()
  //
  return (
    <menu className="flex flex-col justify-center items-center gap-6 mt-16">
      {navLinks.map((navLink) => {
        const isActive = navLink.route === pathname
        return (
          <li key={navLink.id}>
            <Link
              className={`text-3xl ${isActive ? "text-red" : "text-white"}`}
              href={navLink.route}
              onClick={() => setIsSidebarOpen(false)}
            >
              {navLink.label}
            </Link>
          </li>
        );
      })}
    </menu>
  );
};

export default LinkList;
