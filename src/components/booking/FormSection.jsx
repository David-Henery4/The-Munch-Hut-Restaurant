import { SecondaryHeader } from "../shared";
import FormTitleAndBody from "./form-section-comps/FormTitleAndBody";
import { ContactOptionsList } from "../contact/content-comps/details-comps";

const FormSection = () => {
  return (
    <section className="w-full col-start-2 col-end-12 py-12 tab:py-20 desk:py-28">
      <div className="text-center mb-12 text-red">
        <SecondaryHeader>Fill in the form</SecondaryHeader>
      </div>

      <div className="w-full flex flex-col gap-12 smLap:flex-row smLap:items-center">
        <FormTitleAndBody />
        <div className="w-full smLap:flex-[1]">
          <ContactOptionsList isBookingPage={true} />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
