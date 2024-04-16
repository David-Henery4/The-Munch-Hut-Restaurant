import { PrimaryHeader, BodyText } from "@/components/shared";
import { PortableText } from "@portabletext/react";

const components = {
  types: {},
  block: {
    h1: ({ value, children }) => {
      return (
        <div className="mb-8">
          <PrimaryHeader>{children}</PrimaryHeader>
        </div>
      );
    },
    normal: ({ value, index, children, isInline }) => {
      return (
        <div>
          <BodyText>{children}</BodyText>
        </div>
      );
    },
  },
  marks: {
    highlight: ({ children, value }) => {
      return <span className="text-red">{children}</span>;
    },
  },
};

const StoryText = ({ storyBody }) => {
  //
  return (
      <div className="w-full grid gap-6 max-w-[472px] mx-auto desk:mt-12">
        <PortableText value={storyBody} components={components} />
      </div>
  );
};

export default StoryText;
