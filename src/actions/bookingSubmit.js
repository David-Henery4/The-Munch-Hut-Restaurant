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
  availableDate: z.coerce.date().transform((val, ctx) => {
    const yesterday = new Date(
      new Date().setDate(new Date().getDate() - 1)
    ).getDate();
    const requestedDate = val.getDate();
    if (requestedDate <= yesterday) {
      ctx.addIssue({ message: "Can't be in the past!" });
      return z.NEVER;
    }
    const formattedDate = new Intl.DateTimeFormat("en-GB", {weekday: "long", month: "long", day: "2-digit", year: "2-digit"}).format(val);
    console.log(formattedDate)
    return formattedDate;
  }),
  //
  time: z
    .string({ required_error: "Time is required" })
    .time({ message: "Invalid time" })
    .transform((val, ctx) => {

      const [hours, minutes, seconds] = val.split(":");
      const givenTime = new Date();
      givenTime.setHours(Number(hours), Number(minutes), Number(seconds), 0);
      const timeDifference = givenTime.getTime() - new Date().getTime();

      // True === Booking is within an hour of requested time (not eligible for booking)
      if (timeDifference <= 3600000){
        ctx.addIssue({message: "Booking must be at least an hour before current time"})
        return z.NEVER;
      }
      // False === Booking is at least an hour after requested time (eligible for booking)
      return val
    }),
  //
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email(),
  //
  phoneNumber: z
    .string()
    .length(11)
    .transform((val, ctx) => {
      if (val.length !== 11) {
        ctx.addIssue({ message: "Phone number needs 11 digits" });
        return z.NEVER;
      }
      return parseInt(val);
    }),
  //
  message: z.string().optional(),
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
  const results = BookingForm.safeParse(rawData);
  console.log(results);
  //
  return rawData;
};

export default handleBookingSubmit;
