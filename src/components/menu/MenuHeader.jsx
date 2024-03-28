import { MenuHeaderImg, MenuHeaderCard } from "./menu-header-comps";

const MenuHeader = () => {
  return (
    <header className="relative col-start-1 col-end-13 w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk py-20 smTab:py-36">
      <MenuHeaderImg />

      <MenuHeaderCard />
    </header>
  );
};

export default MenuHeader;
