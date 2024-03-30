import Image from "next/image"

const HeaderImage = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"/>
      <Image
        width={3200}
        height={3200}
        src="/images/contact/tower-bridge.jpg"
        alt="London's tower bridge with a red and pink sunset in the background"
        className="w-full h-full object-cover"
        priority={true}
      />
    </div>
  );
}

export default HeaderImage