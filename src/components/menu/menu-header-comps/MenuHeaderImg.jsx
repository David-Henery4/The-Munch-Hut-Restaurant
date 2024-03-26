import Image from "next/image"


const MenuHeaderImg = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <Image
        width={3100}
        height={3100}
        src="/images/menu/menu-header-img.png"
        alt="header for the menu page, showcasing one of our fine pizzas"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

export default MenuHeaderImg