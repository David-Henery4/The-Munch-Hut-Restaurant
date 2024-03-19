import Link from "next/link";

const MenuLink = () => {
  // will change back to black
  return (
    <Link
      href="/menu"
      className="w-32 py-2 text-center bg-white text-black rounded-md"
    >
      Menu
    </Link>
  );
};

export default MenuLink;
