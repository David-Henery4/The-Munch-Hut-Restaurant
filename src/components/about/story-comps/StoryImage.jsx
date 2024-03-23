import Image from "next/image"

const StoryImage = () => {
  return (
    <div className="w-full">
      <Image
        width={740}
        height={740}
        src="/images/about-story/active-bar.jpg"
        alt="The bar and restaurant full of people on a very busy evening"
        className="w-full h-[350px] object-cover object-center"
      />
    </div>
  );
}

export default StoryImage