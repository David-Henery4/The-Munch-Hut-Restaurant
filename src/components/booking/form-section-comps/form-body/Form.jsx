"use client";
import { useFormState } from "react-dom";
import { FormInput, FormSubmitBtn } from "./form-comps";
import handleBookingSubmit from "@/actions/bookingSubmit";
import formInputs from "@/form-data/formInputs";

const initialState = {
  fullName: "",
  amountOfPeople: 0,
  availableDate: "",
  time: 0,
  email: "",
  phoneNumber: 0,
  message: ""
};

const Form = () => {
  const [state, formAction] = useFormState(handleBookingSubmit, initialState);
  //
  const handleOptiUpdates = (formData) => {
    formAction(formData)
    console.log(state)
  }
  //
  return (
    <form
      className="w-full grid gap-4 mt-6 XtraSmTab:grid-cols-teamGridColsTab"
      action={handleOptiUpdates}
    >
      {formInputs.map((inputData, i) => {
        let isError = false
        let errorMsg = ""
        //
        if (state?.fieldErrors){
          Object.entries(state.fieldErrors).forEach(item => {
            const isCurrentInputError = inputData?.name === item[0];
            if (isCurrentInputError)
            {
              isError = true
              errorMsg = item[1];
            } 
          })
        }
        //
        return (
          <FormInput
            key={inputData?.id}
            name={inputData?.name}
            id={inputData?.id}
            label={inputData?.label}
            isMessage={inputData?.isMessage}
            className={inputData?.className}
            isError={{isError, errorMsg}}
          />
        );
      })}
      <div className="XtraSmTab:col-start-2 XtraSmTab:col-end-3 XtraSmTab:justify-self-end">
        <FormSubmitBtn />
      </div>
    </form>
  );
};

export default Form;
