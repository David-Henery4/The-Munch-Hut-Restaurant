import {  ContactOptionsList, MapWrapper } from "./details-comps";

const ContactDetails = () => {
  return (
    <div className="mt-16 flex flex-col justify-center items-start gap-12 smLap:flex-row smLap:items-center smTab:mt-24 smDesk:mt-32">
      <ContactOptionsList />
      <MapWrapper />
    </div>
  );
};

export default ContactDetails;
