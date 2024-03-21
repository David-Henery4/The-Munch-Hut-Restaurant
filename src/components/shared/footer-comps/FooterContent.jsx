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
    <div className="px-6 pt-12 pb-6 text-center grid gap-8">
      <LogoTitle />

      <SocialsDesc/>

      <QuickLinks/>

      <ContactDets/>

      <LocationDets/>

      <FooterMapContainer/>

    </div>
  );
};

export default FooterContent;
