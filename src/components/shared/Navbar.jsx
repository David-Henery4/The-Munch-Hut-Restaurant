import { BookingIcon, BurgerIcon, LogoIcon } from "../../../public/assets";
import navLinks from "@/link-list-data/navLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-6 py-3 flex justify-between items-center lgMob:px-10 tab:py-8">
      <div className="">
        <LogoIcon />
      </div>
      <ul className="hidden tab:flex justify-center items-center gap-6 text-sm font-light">
        {navLinks.map((linkItem) => {
          return (
            <li key={linkItem?.id} className="hover:text-red">
              <Link href={linkItem?.route}>{linkItem?.label}</Link>
            </li>
          );
        })}
      </ul>
      <div className="hidden w-[50px] h-[50px] tab:grid bg-red rounded-full place-items-center hover:cursor-pointer hover:bg-redHover">
        <Link
          href="/booking"
          className="text-sm font-light inline-block"
        >
          <BookingIcon />
        </Link>
      </div>
      <BurgerIcon className="cursor-pointer tab:hidden" />
    </nav>
  );
};

export default Navbar;
