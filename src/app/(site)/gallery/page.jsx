import { GalleryHeader, GallerySection } from "@/components/gallery"

const GalleryPage = () => {
  return (
    <main className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk">
      <GalleryHeader/>
      <GallerySection/>
    </main>
  );
}

export default GalleryPage