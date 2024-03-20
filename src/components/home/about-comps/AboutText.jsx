import { SecondaryHeader, BodyText } from "@/components/shared";
import Link from "next/link";

const AboutText = () => {
  return (
    <div>
      <SecondaryHeader>
        A little bit about the <span className="text-red">Munch Hut</span>
      </SecondaryHeader>

      <div className="mt-6">
        <BodyText>
          Welcome to The Munch Hut, where culinary excellence and fine dinning
          at the heart of everything we do. We pride ourselves on offering a
          diverse menu that caters to all tastes. From sizzling BBQ to succulent
          seafood, flavorful vegetarian options to authentic Spanish dishes,
          there&apos;s something for everyone.
        </BodyText>
        <BodyText>
          Our team is lives for crafting meals that tantalize the taste buds,
          leaving every guest satisfied. Come dine with us and experience an
          adventure that celebrates the art of great food.
        </BodyText>
      </div>

      <Link
        href="/about"
        className="mt-8 py-2 w-32 bg-red inline-block rounded-md"
      >
        Our Story
      </Link>
    </div>
  );
};

export default AboutText;
