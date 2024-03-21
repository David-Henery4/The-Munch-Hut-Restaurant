import Image from "next/image";

const FooterMapContainer = () => {
  return (
    <div className="smTab:col-start-2 smTab:col-end-12">
      <Image
        src="/images/footer-map-placeholder/map-img-placeholder.png"
        width={480}
        height={480}
        alt="Placeholder for the map showing the restaurant location"
        className="h-72 w-full object-cover object-center"
      />
    </div>
  );
};

export default FooterMapContainer;
