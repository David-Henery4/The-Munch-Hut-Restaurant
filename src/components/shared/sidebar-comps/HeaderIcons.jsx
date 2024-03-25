import { LogoIcon, CloseIcon } from "../../../../public/assets";
import Link from "next/link";

const HeaderIcons = ({ setIsSidebarOpen }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <Link href="/" onClick={() => setIsSidebarOpen(false)}>
        <LogoIcon className="cursor-pointer" />
      </Link>
      <div className="w-12 h-12 cursor-pointer">
        <CloseIcon
          className="w-full h-full"
          onClick={() => setIsSidebarOpen(false)}
        />
      </div>
    </div>
  );
};

export default HeaderIcons;
