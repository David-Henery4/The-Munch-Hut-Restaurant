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
  // const formattedDate = new Intl.DateTimeFormat("en-GB", {
  //   weekday: "long",
  //   month: "long",
  //   day: "2-digit",
  //   year: "2-digit",
  // }).format(rawData?.availableDate);
  // console.log(formattedDate)
  const [date, month, year] = rawData?.availableDate.split("-")
  const formattedAvailableDate = `${month}-${date}-${year}`;
  const results = BookingForm.safeParse({
    ...rawData,
    availableDate: formattedAvailableDate,
    time: { time: rawData?.time, date: formattedAvailableDate },
  });
  if (!results.success) {
    const errorValues = results.error.flatten();
    return errorValues;
  }
  //
  return rawData;
};

export default handleBookingSubmit;
