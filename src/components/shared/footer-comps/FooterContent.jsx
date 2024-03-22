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
    <div className="px-6 pt-16 pb-10 text-center grid gap-8 smTab:grid-cols-basic12 lgMob:pt-24 lgMob:pb-16 smTab:text-left smTab:gap-y-16 smTab:gap-x-12 lap:gap-x-4 lap:gap-y-8">
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
