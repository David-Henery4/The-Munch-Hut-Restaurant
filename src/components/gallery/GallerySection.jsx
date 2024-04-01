import { BodyText } from "../shared";
import GalleryContainer from "./gallery-comps/GalleryContainer";

const GallerySection = () => {
  return (
    <section className="w-full max-w-[1160px] mx-auto col-start-2 col-end-12 py-14 smTab:py-28">
      <div className="text-center max-w-[417px] mx-auto">
        <BodyText>
          Lorem ipsum dolor sit amet consectetur. Ultrices semper aliquam sit
          fringilla pretium nibh quam tellus aenean. Blandit bibendum amet
          consequat amet sed. Vestibulum vulputate nibh lectus eget nec.
        </BodyText>
      </div>
      <GalleryContainer />
    </section>
  );
};

export default GallerySection;
