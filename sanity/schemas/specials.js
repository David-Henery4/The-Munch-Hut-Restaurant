import { defineType, defineField } from "sanity";

const specials = defineType({
  title: "Weekly Special",
  name: "weeklySpecial",
  type: "document",
  fields: [
    defineField({
      title: "Food Name",
      name: "foodName",
      type: "string",
    }),
    defineField({
      title: "Food Description",
      name: "foodDescription",
      type: "text",
    }),
  ],
});

export default specials