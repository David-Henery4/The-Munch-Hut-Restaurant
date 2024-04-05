import { defineType, defineField } from "sanity";

const food = defineType({
  title: "Food",
  name: "food",
  type: "document",
  fields: [
    defineField({
      title: "Food Name",
      name: "foodName",
      type: "string",
    }),
    defineField({
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "FoodCategories" }],
    }),
    defineField({
      title: "Food Description",
      name: "foodDescription",
      type: "text",
    }),
  ],
  // preview: {

  // }
});

export default food;
