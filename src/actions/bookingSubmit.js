"use server";
import { z } from "zod";

const BookingForm = z.object({
  fullName: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  //
  amountOfPeople: z.coerce
    .number({
      required_error: "Amount Of People is required",
      invalid_type_error: "Must be a postive number",
    })
    .positive()
    .int()
    .finite()
    .max(12)
    .min(1),
  //
  availableDate: z.string({ required_error: "Date is required" }).date(),
  //
  time: z
    .string({ required_error: "Time is required" })
    .time({ message: "Invalid time" }),
  //
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email(),
  //
  phoneNumber: z.coerce
    .number({
      required_error: "Phone number is required",
      invalid_type_error: "Must be a postive number",
    })
    .positive()
    .int()
    .finite()
    .min(11, { message: "Must be 11 digits" })
    .max(11, { message: "Must be 11 digits" }),
  //
  message: z.string(),
});

const handleBookingSubmit = async (currentState, formData) => {
  // console.log(currentState)
  // console.log(formData)
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
  console.log(rawData);
  const results = BookingForm.parse(rawData);
  console.log(results);
  //
  return rawData;
};

export default handleBookingSubmit;
