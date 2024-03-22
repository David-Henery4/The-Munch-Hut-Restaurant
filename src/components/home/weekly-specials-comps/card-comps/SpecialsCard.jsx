import Image from "next/image";

const SpecialsCard = () => {
  return (
    <div className="w-full even:pt-16">
      <Image
        src="/images/home-specials/bbq-ribs.jpg"
        width={420}
        height={420}
        alt="showcase of todays special no #1"
        className="h-64 w-full object-cover object-center lgMob:h-96"
      />
      <div className="mt-4 lgMob:mt-6">
        <h4 className="text-lg font-semibold">Product Title</h4>
        <p>$ 20.00</p>
      </div>
    </div>
  );
}

export default SpecialsCard