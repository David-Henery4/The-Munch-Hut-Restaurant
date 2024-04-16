import { StoryText, StoryImage } from "./story-comps";
import { client } from "../../../sanity/lib/client";
import { revalidateTag } from "next/cache";

const StorySection = async () => {
  const storyData = await client.fetch(
    "*[_type == 'ourStory'][0]{storyTitle, storyImage, story}",
    {},
    { next: { tags: ["storyData"] } }
  );
  revalidateTag("storyData");
  // console.log(storyData)
  //
  return (
    <section className="col-start-2 col-end-12 max-w-[1160px] mx-auto py-24 text-center grid gap-16 items-center lap:text-left desk:py-32">
      <StoryText
        storyTitle={storyData?.storyTitle}
        storyBody={storyData?.story}
      />
      <StoryImage storyImage={storyData?.storyImage} />
    </section>
  );
};

export default StorySection;
