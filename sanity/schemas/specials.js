import { defineType, defineField } from "sanity";

// Will need Images

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
    defineField({
      title: "Food Image",
      name: "foodImage",
      type: "image",
    })
  ],
});

export default specials