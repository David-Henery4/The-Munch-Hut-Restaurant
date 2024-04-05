import { defineType, defineField } from "sanity";

const drink = defineType({
  title: "Drink",
  name: "drink",
  type: "document",
  fields: [
    defineField({
      title: "Drink Name",
      name: "drinkName",
      type: "string",
    }),
    defineField({
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "drinkCategories" }],
    }),
    defineField({
      title: "Drink Description",
      name: "drinkDescription",
      type: "text",
    }),
  ],
});

export default drink