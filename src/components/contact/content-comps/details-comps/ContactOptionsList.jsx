import ContactOptionCard from "./contactOptionCard.jsx/ContactOptionCard";
import placeholderContactList from "@/contact-details-list/placeholderContactList";

const ContactOptionsList = ({isBookingPage= false}) => {
  return (
    <ul
      className={`w-full flex flex-wrap justify-center gap-8 smLap:justify-start smLap:flex-col smLap:flex-nowrap smLap:flex-[1] smLap:gap-12 ${
        isBookingPage ? "smLap:items-center" : ""
      }`}
    >
      {placeholderContactList.map((contactOption) => {
        const isValueArray = typeof contactOption.value !== "string";
        return (
          <li
            key={contactOption.id}
            className="flex justify-start items-start gap-6"
          >
            <ContactOptionCard
              contactOption={contactOption}
              isValueArray={isValueArray}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactOptionsList;
