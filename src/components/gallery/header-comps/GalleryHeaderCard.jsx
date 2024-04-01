import { BodyText, BookLink } from "@/components/shared";

const GalleryHeaderCard = () => {
  return (
    <div className="relative w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk max-w-[1440px] mx-auto">
      <div className="col-start-2 col-end-12 text-center bg-black/75 px-6 py-12 rounded-xl max-w-[433px] mx-auto lgMob:px-10 XtraSmTab:p-12 XtraSmTab:text-left XtraSmTab:m-0">
        <h1 className="text-5xl font-pompiere tab:text-7xl">Our Gallery</h1>
        <div className="mt-6 grid justify-items-center gap-4 XtraSmTab:justify-items-start">
          <BodyText>
            Discover flavorful delights on our menu at The Munch Hut.
          </BodyText>
          <BookLink />
        </div>
      </div>
    </div>
  );
};

export default GalleryHeaderCard;
