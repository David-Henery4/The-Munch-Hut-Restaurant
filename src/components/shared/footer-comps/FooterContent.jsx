import {
  LogoTitle,
  ContactDets,
  FooterMapContainer,
  LocationDets,
  QuickLinks,
  SocialsDesc,
} from "./footer-content-items";

const FooterContent = () => {
  return (
    <div className="px-6 pt-16 pb-10 text-center grid gap-8 max-w-[1440px] mx-auto smTab:grid-cols-basic12 lgMob:px-10 smTab:text-left smTab:gap-y-16 smTab:gap-x-12 lap:gap-x-4 lap:gap-y-8 lap:pt-20 lap:pb-14 lgLap:px-[105px] desk:px-[140px]">
      <LogoTitle />

      <SocialsDesc />

      <QuickLinks />

      <ContactDets />

      <LocationDets />

      <FooterMapContainer />
    </div>
  );
};

export default FooterContent;
