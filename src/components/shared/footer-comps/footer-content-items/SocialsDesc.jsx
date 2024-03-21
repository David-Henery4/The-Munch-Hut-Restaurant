import { BodyText } from "../..";
import {
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from "../../../../../public/assets";

const SocialsDesc = () => {
  return (
    <div className="smTab:col-start-2 smTab:col-end-7">
      <div className="max-w-80 mx-auto">
        <BodyText>
          Summarize your business so the visitor can learn about your offerings
          from any page on your website.
        </BodyText>
      </div>
      <div className="w-full flex justify-center items-center gap-2 mt-4 smTab:justify-start">
        <PinterestIcon className="cursor-pointer fill-red hover:fill-redHover" />
        <FacebookIcon className="cursor-pointer fill-red hover:fill-redHover" />
        <InstagramIcon className="cursor-pointer fill-red hover:fill-redHover" />
        <TwitterIcon className="cursor-pointer fill-red hover:fill-redHover" />
        <YoutubeIcon className="cursor-pointer fill-red hover:fill-redHover" />
      </div>
    </div>
  );
};

export default SocialsDesc;
