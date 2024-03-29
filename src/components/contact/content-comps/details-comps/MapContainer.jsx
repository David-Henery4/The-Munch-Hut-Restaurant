import Image from "next/image"

const MapContainer = () => {
  return (
    <div className="w-full h-80 smLap:flex-[2] smTab:h-[540px]">
      <Image
        src="/images/contact/contact-map.png"
        alt="map view of the restaurant location"
        width={1400}
        height={1400}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default MapContainer