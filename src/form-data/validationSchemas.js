import { date, z } from "zod";

export const BookingForm = z.object({
  fullName: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .transform((val, ctx) => {
      if (val === "") {
        ctx.addIssue({ message: "Name can't be empty" });
        return z.NEVER;
      }
      if (val.length < 3) {
        ctx.addIssue({ message: "Name has to be at least 3 characters" });
        return z.NEVER;
      }
      return val;
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
    const yesterday = +new Date(new Date().setHours(0, 59, 59, 0));
    const requestedDate = +new Date(
      new Date(val).setHours(1, 0, 0, 0)
    );
    //
    if (requestedDate <= yesterday) {
      ctx.addIssue({ message: "Can't be in the past!" });
      return z.NEVER;
    }
    //
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      month: "long",
      day: "2-digit",
      year: "2-digit",
    }).format(val);
    //
    return formattedDate;
  }),
  //
  time: z
    .object({
      time: z
        .string({ required_error: "Time is required" })
        .time({ message: "Invalid time" }),
      date: z.coerce.date({ message: "Invalid date" }),
    })
    .transform((val, ctx) => {
      const [hours, minutes, seconds] = val.time.split(":");
      const givenTime = new Date();
      givenTime.setHours(Number(hours), Number(minutes), Number(seconds), 0);
      const timeDifference = givenTime.getTime() - new Date().getTime();
      //
      const yesterday = +new Date(new Date().setHours(0, 59, 59, 0));
      const requestedDate = +new Date(
        new Date(val.date).setHours(1, 0, 0, 0)
      );
      //
      if (requestedDate <= yesterday) {
        ctx.addIssue({ message: "Can't be in the past!" });
        return z.NEVER;
      }
      // True === Booking is within an hour of requested time (not eligible for booking)
      if (
        requestedDate === +new Date(new Date().setHours(1, 0, 0, 0)) &&
        timeDifference <= 3600000
      ) {
        ctx.addIssue({
          message: "Booking must be at least an hour before current time",
        });
        return z.NEVER;
      }
      // False === Booking is at least an hour after requested time (eligible for booking)
      return val.time;
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
    .length(11, { message: "Phone number needs 11 digits" })
    .transform((val, ctx) => {
      if (val.length !== 11) {
        ctx.addIssue({
          message: "Phone number needs 11 digits",
          code: z.ZodIssueCode.custom,
        });
        return z.NEVER;
      }
      return parseInt(val);
    }),
  //
  message: z.string().optional(),
});
