"use server";
import { BookingForm } from "@/form-data/validationSchemas";
import createBooking from "@/booking-api/createBooking";

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
  //
  const [date, month, year] = rawData?.availableDate.split("-");
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
  const res = await createBooking(results?.data)
  //
  return results?.data || null;
};

export default handleBookingSubmit;
