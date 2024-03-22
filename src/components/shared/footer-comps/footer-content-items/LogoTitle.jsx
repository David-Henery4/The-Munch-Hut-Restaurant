import { LogoIcon } from "../../../../../public/assets";

const LogoTitle = () => {
  return (
    <div className="grid place-items-center gap-4 smTab:col-start-4 smTab:col-end-10 lap:col-start-1 lap:col-end-4 lap:flex lap:justify-start lap:items-center lap:row-start-1 lap:row-end-2 lap:gap-4">
      <div className="lap:flex-[1]">
        <LogoIcon />
      </div>
      <div className="lap:flex-[3]">
        <h6 className="text-5xl font-pompiere lgMob:text-6xl lap:text-3xl">The Munch Hut</h6>
      </div>
    </div>
  );
};

export default LogoTitle;
