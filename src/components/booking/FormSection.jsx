import { SecondaryHeader } from "../shared";
import FormTitleAndBody from "./form-section-comps/FormTitleAndBody";
import { ContactOptionsList } from "../contact/content-comps/details-comps";

const FormSection = () => {
  return (
    <section className="w-full col-start-2 col-end-12 py-12">

      <div className="text-center mb-12 text-red">
        <SecondaryHeader>Fill in the form</SecondaryHeader>
      </div>

      <div className="w-full flex flex-col gap-12">
        <FormTitleAndBody />
        <div className="w-full">
          <ContactOptionsList />
        </div>
      </div>

    </section>
  );
};

export default FormSection;
