import { BurgerIcon, LogoIcon} from "../../../public/assets";

const Navbar = () => {
  return (
    <nav className="px-6 py-3 flex justify-between items-center">
      <LogoIcon/>
      <BurgerIcon className="cursor-pointer" />
    </nav>
  );
};

export default Navbar;
