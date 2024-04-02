import { GalleryHeaderCard, GalleryHeaderImg } from "./header-comps"

const GalleryHeader = () => {
  return (
    <header className="col-start-1 col-end-13 relative w-full py-20 smTab:py-36">
      <GalleryHeaderImg />
      <GalleryHeaderCard />
    </header>
  );
}

export default GalleryHeader