import Image from "next/image";

const EndingSection = () => {
  return (
    <section className="col-start-2 col-end-12 py-20 flex flex-col gap-12 border-b-2 border-b-gold tab:flex-row tab:items-center tab:py-20 desk:py-28">
      <h4 className="text-4xl text-center max-w-[360px] mx-auto XtraSmTab:text-5xl XtraSmTab:max-w-[390px] tab:flex-[1] tab:text-left tab:m-0">
        We can’t wait to see you at the{" "}
        <span className="text-red">munch hut!</span>
      </h4>
      <div className="w-full h-[275px] mx-auto max-w-[370px] lgMob:h-[375px] tab:flex-[2] tab:m-0 tab:ml-auto desk:h-[475px] desk:max-w-[470px]">
        <Image
          src="/images/booking/busy-restaurant.png"
          alt="The munch hut restaurant busy during the day"
          width={1200}
          height={1200}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default EndingSection