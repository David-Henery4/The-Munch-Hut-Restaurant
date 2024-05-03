"use client";
import { useFormState } from "react-dom";
import {
  FormInput,
  FormSubmitBtn,
  FormDatePicker,
  FormTimePicker,
} from "./form-comps";
import handleBookingSubmit from "@/actions/bookingSubmit";
import formInputs from "@/form-data/formInputs";
import {useEffect, useState } from "react";
import { BodyText } from "@/components/shared";

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
  const [isBookingCompleted, setIsBookingCompleted] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(
    new Date(
      new Date().setHours(
        new Date().getHours() + 1,
        new Date().getMinutes() + 1,
        0,
        0
      )
    )
  );
  //
  const handleDisplayAfterBooking = () => {
    if (state?.success) {
      setIsBookingCompleted(true);
      return;
    }
    setIsBookingCompleted(false);
  }
  //
  useEffect(() => {
    handleDisplayAfterBooking()
  },[state])
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
        if (inputData?.name === "time") {
          return (
            <FormTimePicker
              key={inputData?.id}
              name={inputData?.name}
              id={inputData?.id}
              label={inputData?.label}
              startTime={startTime}
              setStartTime={setStartTime}
              isError={{ isError, errorMsg }}
            />
          );
        }
        if (inputData?.name === "availableDate") {
          return (
            <FormDatePicker
              key={inputData?.id}
              name={inputData?.name}
              id={inputData?.id}
              label={inputData?.label}
              startDate={startDate}
              setStartDate={setStartDate}
              isError={{ isError, errorMsg }}
            />
          );
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
            isError={{ isError, errorMsg }}
          />
        );
      })}
      {isBookingCompleted ? (
        <div className="XtraSmTab:col-start-1 XtraSmTab:col-end-3 XtraSmTab:justify-self-center">
          <BodyText>
            <span className="text-red">Thank you</span> for booking a table at
            the munch hut!
          </BodyText>
          <BodyText>
            We&apos;ll be in touch to confirm your booking shortly.
          </BodyText>
        </div>
      ) : (
        <div className="XtraSmTab:col-start-2 XtraSmTab:col-end-3 XtraSmTab:justify-self-end">
          <FormSubmitBtn />
        </div>
      )}
    </form>
  );
};

export default Form;
