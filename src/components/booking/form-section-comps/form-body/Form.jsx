"use client";

import { FormInput, FormSubmitBtn } from "./form-comps";

const Form = () => {
  // Hard coded props are temp
  return (
    <form className="w-full grid gap-4 mt-6">
      <FormInput 
        name={"full-name"} 
        id={"full-name"} 
        label={"Full name"} 
      />
      <FormInput
        name={"amount-of-people"}
        id={"amount-of-people"}
        label={"Amount of people"}
      />
      <FormInput 
        name={"time"} 
        id={"time"} 
        label={"Time"} 
      />
      <FormInput 
        name={"email"} 
        id={"email"} 
        label={"Email"} 
      />
      <FormInput
        name={"phone-number"}
        id={"phone-number"}
        label={"Phone Number"}
      />
      <FormInput
        name={"message"}
        id={"message"}
        label={"Message"}
        isMessage={true}
      />
      <div>
        <FormSubmitBtn />
      </div>
    </form>
  );
};

export default Form;
