import { BodyText } from "../shared";
import GalleryContainer from "./gallery-comps/GalleryContainer";
import { client } from "../../../sanity/lib/client";
import { revalidateTag } from "next/cache";

const GallerySection = async () => {
  const { galleryDescription, galleryImages } = await client.fetch(
    "*[_type == 'galleryContent'][0]{galleryImages, galleryDescription}",
    {},
    { next: { tags: ["galleryData"] } }
  );
  revalidateTag("galleryData");
  //
  return (
    <section className="w-full max-w-[1160px] mx-auto col-start-2 col-end-12 py-14 smTab:py-28">
      <div className="text-center max-w-[417px] mx-auto XtraSmTab:text-left XtraSmTab:ml-0 smLap:max-w-[517px]">
        <BodyText>{galleryDescription}</BodyText>
      </div>
      <GalleryContainer galleryImages={galleryImages} />
    </section>
  );
};

export default GallerySection;
