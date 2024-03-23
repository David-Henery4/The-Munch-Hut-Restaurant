import { BodyText, PrimaryHeader } from "@/components/shared";

const HeaderHeroText = () => {
  return (
    <div className="text-center z-10">
      <PrimaryHeader className="font-pompiere text-6xl lgMob:text-7xl XtraSmTab:text-8xl lgLap:text-9xl">
        The Munch Hut
      </PrimaryHeader>
      <div className="max-w-[170px] mx-auto mt-2 lgMob:mt-4 smTab:mt-6 lgLap:max-w-[230px]">
        <BodyText>High Quality Dinning for the whole family</BodyText>
      </div>
    </div>
  );
}

export default HeaderHeroText