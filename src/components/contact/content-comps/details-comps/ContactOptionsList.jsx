import ContactOptionCard from "./contactOptionCard.jsx/ContactOptionCard";
// import placeholderContactList from "@/contact-details-list/placeholderContactList";
import { client } from "../../../../../sanity/lib/client";
import { revalidateTag } from "next/cache";

const ContactOptionsList = async ({isBookingPage= false}) => {
  const contactInformationData = await client.fetch(
    "*[_type == 'contactInformation'][0]{email, phoneNumber, social}",
    {},
    { next: { tags: ["contactInformationData"] } }
  );
  revalidateTag("contactInformationData");
  //
  return (
    <ul
      className={`w-full grid justify-center gap-8 smTab:grid-cols-contactOptionTab smLap:grid-cols-contactOptionLap smLap:flex-[1] smLap:gap-12 ${
        isBookingPage
          ? "smLap:items-center smLap:justify-center"
          : "smLap:justify-start"
      }`}
    >
      {Object.entries(contactInformationData).map((contactOption, i) => {
        const key = contactOption[0];
        const value = contactOption[1];
        const isValueArray = typeof value !== "string";
        return (
          <li key={i} className="flex justify-start items-start gap-6">
            <ContactOptionCard
              name={key}
              value={value}
              isValueArray={isValueArray}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactOptionsList;
