import { BodyText, BookLink } from "@/components/shared"

const MenuHeaderCard = () => {
  return (
    <div className="col-start-2 col-end-12 z-10 flex flex-col gap-4 px-6 py-12 justify-center items-center text-center bg-black/75 rounded-xl">
      <h1 className="text-5xl font-pompiere">Our Menu</h1>
      <div className="mt-4">
        <BodyText>
          Discover flavorful delights on our menu at The Munch Hut.
        </BodyText>
      </div>
      <BookLink />
    </div>
  );
}

export default MenuHeaderCard