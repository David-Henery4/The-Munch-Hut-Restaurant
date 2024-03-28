import { MenuHeaderImg, MenuHeaderCard } from "./menu-header-comps";

const MenuHeader = () => {
  return (
    <header className="relative col-start-1 col-end-13 w-full py-20 smTab:py-36">
      <MenuHeaderImg />
      <div className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk max-w-[1440px] mx-auto">
        <MenuHeaderCard />
      </div>
    </header>
  );
};

export default MenuHeader;
