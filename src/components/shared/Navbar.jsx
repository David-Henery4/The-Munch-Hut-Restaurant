import { BurgerIcon, LogoIcon } from "../../../public/assets";
import { NavList, BookingBtn} from "./navbar-comps";

const Navbar = () => {
  return (
    <nav className="px-6 py-3 flex justify-between items-center lgMob:px-10 tab:py-8">
      <div className="">
        <LogoIcon />
      </div>
      <NavList/>
      <BookingBtn/>
      <BurgerIcon className="cursor-pointer tab:hidden" />
    </nav>
  );
};

export default Navbar;
