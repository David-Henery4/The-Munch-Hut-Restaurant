import { SecondaryHeader } from "../..";
import { LogoIcon } from "../../../../../public/assets";

const LogoTitle = () => {
  return (
    <div className="grid place-items-center gap-4 smTab:col-start-4 smTab:col-end-10 lap:col-start-1 lap:col-end-4 lap:flex lap:justify-start lap:items-center lap:row-start-1 lap:row-end-2 lap:gap-4">
      <div className="lap:flex-[1]">
        <LogoIcon />
      </div>
      <div className="lap:flex-[3]">
        <SecondaryHeader>The Munch Hut</SecondaryHeader>
      </div>
    </div>
  );
};

export default LogoTitle;
