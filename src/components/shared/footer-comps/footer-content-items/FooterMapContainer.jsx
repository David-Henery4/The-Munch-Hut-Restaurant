import Image from "next/image";

const FooterMapContainer = () => {
  return (
    <div className="smTab:col-start-2 smTab:col-end-12 lap:col-start-10 lap:col-end-13 lap:row-start-1 lap:row-end-4">
      <Image
        src="/images/footer-map-placeholder/map-img-placeholder.png"
        width={480}
        height={480}
        alt="Placeholder for the map showing the restaurant location"
        className="h-72 w-full object-cover object-center lap:h-full"
      />
    </div>
  );
};

export default FooterMapContainer;
