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
    <div className="px-6 pt-12 pb-6 text-center grid gap-8 smTab:grid-cols-basic12 smTab:text-left smTab:gap-y-16 smTab:gap-x-12">
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
