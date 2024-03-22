import { FifthHeader } from "../..";
import QuickLinksList from "./quick-links/QuickLinksList";

const QuickLinks = () => {
  return (
    <div className="smTab:col-start-2 smTab:col-end-7 lap:col-start-4 lap:col-end-7 lap:row-start-1 lap:row-end-4 lap:justify-self-center">
      <FifthHeader>Quick Links</FifthHeader>
      <QuickLinksList/>
    </div>
  );
};

export default QuickLinks;
