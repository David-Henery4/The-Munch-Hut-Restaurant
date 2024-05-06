import { SecondaryHeader, BodyText } from "@/components/shared";
import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import { revalidateTag } from "next/cache";
import revalidateHomeAboutDataAction from "@/actions/revalidateHomeAboutData";

const AboutText = async () => {
  const aboutData = await client.fetch("*[_type == 'aboutUsHomePage'][0]", {}, {
    next: {
      tags: ["aboutData"]
    }
  })
  revalidateHomeAboutDataAction()
  //
  return (
    <div className="tab:flex-1 flex flex-col justify-center items-end">
      <div className="flex flex-col justify-center items-center tab:items-start">
        <div className="max-w-64 lgMob:max-w-[350px] lgLap:max-w-[400px]">
          <SecondaryHeader>
            A little bit about the <span className="text-red">Munch Hut</span>
          </SecondaryHeader>
        </div>
        <div className="mt-6 grid gap-4 max-w-[425px] mx-auto tab:ml-0">
          <BodyText>{aboutData?.homeAboutParagraph}</BodyText>
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
