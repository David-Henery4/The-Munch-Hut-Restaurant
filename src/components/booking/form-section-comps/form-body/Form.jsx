"use client";
import { useFormState } from "react-dom";
import { FormInput, FormSubmitBtn, FormDatePicker } from "./form-comps";
import handleBookingSubmit from "@/actions/bookingSubmit";
import formInputs from "@/form-data/formInputs";
import { useEffect, useState } from "react";

const initialState = {
  fullName: "",
  amountOfPeople: 0,
  availableDate: "",
  time: 0,
  email: "",
  phoneNumber: 0,
  message: "",
};

const Form = () => {
  const [state, formAction] = useFormState(handleBookingSubmit, initialState);
  const [startDate, setStartDate] = useState(new Date());
  //
  useEffect(() => {
    console.log(state);
    console.log(startDate);
  }, [state, startDate]);
  //
  return (
    <form
      className="w-full grid gap-4 mt-6 XtraSmTab:grid-cols-teamGridColsTab"
      action={formAction}
    >
      {formInputs.map((inputData, i) => {
        let isError = false;
        let errorMsg = "";
        //
        if (state?.fieldErrors) {
          Object.entries(state.fieldErrors).forEach((item) => {
            const isCurrentInputError = inputData?.name === item[0];
            if (isCurrentInputError) {
              isError = true;
              errorMsg = item[1];
            }
          });
        }
        //
        if (inputData?.name !== "availableDate") {
          return (
            <FormInput
              key={inputData?.id}
              name={inputData?.name}
              id={inputData?.id}
              label={inputData?.label}
              isMessage={inputData?.isMessage}
              className={inputData?.className}
              isError={{ isError, errorMsg }}
            />
          );
        }
        return (
          <FormDatePicker
            key={inputData?.id}
            startDate={startDate}
            setStartDate={setStartDate}
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
