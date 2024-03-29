import { PrimaryHeader } from "@/components/shared";

const HeaderTitle = () => {
  return (
    <div className="w-full relative z-10 py-20 grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk max-w-[1440px] mx-auto smTab:py-28 smDesk:py-32">
      <div className="text-center col-start-2 col-end-12">
        <PrimaryHeader>Contact Information</PrimaryHeader>
      </div>
    </div>
  );
};

export default HeaderTitle;
