import Image from "next/image"

const BgImage = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm" />
      <Image
        width={1710}
        height={1710}
        src="/images/cta/burgers-on-table.jpg"
        alt="Bright and sunny, with a whole table of many different food and drinks"
        className="w-full h-full "
      />
    </div>
  );
}

export default BgImage