import { defineType, defineField } from "sanity"

const bookings = defineType({
  title: "Bookings",
  name: "bookings",
  type: "document",
  fields: [
    defineField({
      title: "Full Name",
      name: "fullName",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: "Amount of people",
      name: "amountOfPeople",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: "Available Date",
      name: "availableDate",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: "Time",
      name: "time",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: "Phone Number",
      name: "phoneNumber",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: "Email",
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: "Is Booking Confirmed?",
      name: "isBookingConfirmed",
      type: "boolean",
    }),
    defineField({
      title: "Message",
      name: "message",
      type: "string",
    }),
  ],
});

export default bookings