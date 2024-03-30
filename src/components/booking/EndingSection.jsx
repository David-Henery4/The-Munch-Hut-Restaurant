import Image from "next/image";

const EndingSection = () => {
  return (
    <section className="col-start-2 col-end-12 py-20 flex flex-col gap-6 border-b-2 border-b-gold">
      <h4 className="text-4xl text-center">
        We can’t wait to see you at the <span className="text-red">munch hut!</span>
      </h4>
      <div className="w-full h-[275px]">
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