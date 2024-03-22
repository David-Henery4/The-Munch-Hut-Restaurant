import { BodyText } from "@/components/shared";

const HeaderHeroText = () => {
  return (
    <div className="text-center z-10">
      <h1 className="font-pompiere text-6xl lgMob:text-7xl">The Munch Hut</h1>
      <div className="max-w-[170px] mx-auto mt-2 lgMob:mt-4">
        <BodyText>High Quality Dinning for the whole family</BodyText>
      </div>
    </div>
  );
}

export default HeaderHeroText