import Link from "next/link";

const MenuLink = ({isNotHeader = false}) => {
  // will change back to black
  return (
    <Link
      href="/menu"
      className={`w-32 py-2 text-center rounded-md text-white ${
        isNotHeader
          ? "bg-red hover:bg-redHover active:bg-red"
          : "bg-black hover:bg-blackHover active:bg-black"
      }`}
    >
      Menu
    </Link>
  );
};

export default MenuLink;
