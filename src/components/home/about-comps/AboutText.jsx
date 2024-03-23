import { SecondaryHeader, BodyText } from "@/components/shared";
import Link from "next/link";

const AboutText = () => {
  return (
    <div className="tab:flex-1 flex flex-col justify-center items-end">

      <div className="flex flex-col justify-center items-center tab:items-start">
        <div className="max-w-64 lgMob:max-w-[350px] lgLap:max-w-[400px]">
          <SecondaryHeader>
            A little bit about the <span className="text-red">Munch Hut</span>
          </SecondaryHeader>
        </div>
        <div className="mt-6 grid gap-4 max-w-[425px] mx-auto tab:ml-0">
          <BodyText>
            Welcome to The Munch Hut, where culinary excellence and fine dinning
            at the heart of everything we do. We pride ourselves on offering a
            diverse menu that caters to all tastes. From sizzling BBQ to
            succulent seafood, flavorful vegetarian options to authentic Spanish
            dishes, there&apos;s something for everyone.
          </BodyText>
          <BodyText>
            In the heart of London, our team lives for crafting meals that
            tantalize the taste buds, leaving every guest satisfied. Come dine
            with us and experience an adventure that celebrates the art of great
            food.
          </BodyText>
        </div>
        <Link
          href="/about"
          className="mt-8 py-2 w-32 bg-red inline-block rounded-md tab:text-center"
        >
          Our Story
        </Link>
      </div>

    </div>
  );
};

export default AboutText;
