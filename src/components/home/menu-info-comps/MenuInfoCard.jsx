import { ThirdHeader, BodyText, MenuLink } from "@/components/shared";

const MenuInfoCard = () => {
  // console.log("menu-card")
  return (
    <div className="col-start-2 col-end-12 row-start-2 row-end-11 text-center z-10 mt-16 px-4 py-8 rounded-2xl bg-black/80">
      <ThirdHeader>Check out our menu</ThirdHeader>
      <div className="grid justify-items-center gap-6 mt-9">
        <BodyText>
          Welcome to The Munch Hut, where our menu is a culinary mosaic of
          flavors and textures, carefully curated to delight even the most
          discerning palate. From sizzling BBQ classics to innovative vegetarian
          creations and everything in between, each dish is crafted with passion
          and precision, promising a memorable dining experience for all.
        </BodyText>
        <MenuLink isNotHeader={true} />
      </div>
    </div>
  );
};

export default MenuInfoCard;
