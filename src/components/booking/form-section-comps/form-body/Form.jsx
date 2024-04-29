"use client";
import { useFormState } from "react-dom";
import { useOptimistic } from "react";
import { FormInput, FormSubmitBtn } from "./form-comps";
import handleBookingSubmit from "@/actions/bookingSubmit";

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
  const [optimistic, addOptimistic] = useOptimistic(
    state,
    (currentState, optimisticValue) => {
      console.log(currentState)
      console.log(optimisticValue)
      return {
        ...currentState,
        BookingStatus: optimisticValue
      }
    }
  );
  //
  const handleOptiUpdates = (formData) => {
    addOptimistic("Booking Request")
    formAction(formData)
  }
  //
  console.log(optimistic)
  // Hard coded props are temp
  // console.log(state)
  return (
    <form
      className="w-full grid gap-4 mt-6 XtraSmTab:grid-cols-teamGridColsTab"
      action={handleOptiUpdates}
    >
      <FormInput name={"fullName"} id={"fullName"} label={"Full name*"} />
      <FormInput
        name={"amountOfPeople"}
        id={"amountOfPeople"}
        label={"Amount of people*"}
      />
      <FormInput
        name={"availableDate"}
        id={"availableDate"}
        label={"Available Date*"}
      />
      <FormInput name={"time"} id={"time"} label={"Time*"} />
      <FormInput
        className="XtraSmTab:row-start-4 XtraSmTab:row-end-5"
        name={"email"}
        id={"email"}
        label={"Email*"}
      />
      <FormInput
        name={"phoneNumber"}
        id={"phoneNumber"}
        label={"Phone Number*"}
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
