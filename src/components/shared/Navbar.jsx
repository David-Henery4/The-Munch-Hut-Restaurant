import { BurgerIcon, LogoIcon } from "../../../public/assets";
import { NavList, BookingBtn, BurgerAndSidebar} from "./navbar-comps";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-6 py-3 flex justify-between items-center max-w-[1440px] mx-auto lgMob:px-10 XtraSmTab:py-8 lgLap:px-[105px] desk:px-[140px]">
      <Link href="/">
        <LogoIcon />
      </Link >
      <NavList />
      <BookingBtn />
      <BurgerAndSidebar />
    </nav>
  );
};

export default Navbar;
