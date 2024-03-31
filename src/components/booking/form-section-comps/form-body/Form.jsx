"use client";

import { FormInput, FormSubmitBtn } from "./form-comps";

const Form = () => {
  // Hard coded props are temp
  return (
    <form className="w-full grid gap-4 mt-6 XtraSmTab:grid-cols-teamGridColsTab">
      <FormInput name={"full-name"} id={"full-name"} label={"Full name"} />
      <FormInput
        name={"amount-of-people"}
        id={"amount-of-people"}
        label={"Amount of people"}
      />
      <FormInput
        name={"available-date"}
        id={"available-date"}
        label={"Available Date"}
      />
      <FormInput name={"time"} id={"time"} label={"Time"} />
      <FormInput
        className="XtraSmTab:row-start-4 XtraSmTab:row-end-5"
        name={"email"}
        id={"email"}
        label={"Email"}
      />
      <FormInput
        name={"phone-number"}
        id={"phone-number"}
        label={"Phone Number"}
        className="XtraSmTab:col-start-1 XtraSmTab:col-end-2"
      />
      <FormInput
        name={"message"}
        id={"message"}
        label={"Message"}
        isMessage={true}
      />
      <div className="XtraSmTab:col-start-2 XtraSmTab:col-end-3 XtraSmTab:justify-self-end">
        <FormSubmitBtn />
      </div>
    </form>
  );
};

export default Form;
