"use server";
import { BookingForm } from "@/form-data/validationSchemas";

const handleBookingSubmit = async (currentState, formData) => {
  //
  let rawData = {};
  for (const pair of formData.entries()) {
    const isString = typeof pair[0] === "string";
    if (isString && !pair[0].includes("$ACTION_")) {
      rawData = {
        [pair[0]]: pair[1],
        ...rawData,
      };
    }
  }
  console.log(rawData)
  const results = BookingForm.safeParse({
    ...rawData,
    time: { time: rawData?.time, date: rawData?.availableDate },
  });
  if (!results.success) {
    const errorValues = results.error.flatten();
    return errorValues;
  }
  //
  return rawData;
};

export default handleBookingSubmit;
