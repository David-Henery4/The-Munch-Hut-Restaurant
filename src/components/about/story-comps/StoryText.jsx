import { PrimaryHeader, BodyText } from "@/components/shared";

const StoryText = () => {
  return (
    <div className="w-full">
      <div>
        <PrimaryHeader>
          Our <span className="text-red">Story</span>
        </PrimaryHeader>
      </div>
      <div className="mt-8 grid gap-6 max-w-[472px] mx-auto desk:mt-12">
        <BodyText>
          Lorem ipsum dolor sit amet consectetur. Vitae orci laoreet risus
          convallis diam fringilla non eget fermentum. Luctus adipiscing nibh
          non libero eu suscipit lacus pretium. Purus ut gravida sagittis sit
          morbi quis egestas sit. Purus mauris nunc ut vitae nunc velit
          dignissim congue integer. Congue facilisi euismod facilisis in sit
          tellus mauris. Hac urna quam sed amet lectus sed. Quis dui est duis
          quis mattis urna in sed.
        </BodyText>
        <BodyText>
          Id elementum dui pellentesque aliquam. Vel turpis interdum
          pellentesque molestie dictum pretium nibh vel in. Mi cursus nunc
          consectetur et quis. Mattis varius amet vel pellentesque congue
          malesuada sed nunc. Sem ornare lorem duis ornare.
        </BodyText>
      </div>
    </div>
  );
}

export default StoryText