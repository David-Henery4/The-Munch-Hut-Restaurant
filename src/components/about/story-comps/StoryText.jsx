import { PrimaryHeader, BodyText } from "@/components/shared";
import { PortableText } from "@portabletext/react";

const components = {
  types: {
    block: ({value}) => {
      return value.children.map((item) => {
        return <BodyText key={item._key}>{item.text}</BodyText>;
      })
    },
  }
};

const StoryText = ({storyTitle, storyBody}) => {
  //
  return (
    <div className="w-full">
      <div>
        <PrimaryHeader>
          {/* {storyTitle} */}
          Our <span className="text-red">Story</span>
        </PrimaryHeader>
      </div>
      <div className="mt-8 grid gap-6 max-w-[472px] mx-auto desk:mt-12">
        <PortableText value={storyBody} components={components} />
      </div>
    </div>
  );
}

export default StoryText