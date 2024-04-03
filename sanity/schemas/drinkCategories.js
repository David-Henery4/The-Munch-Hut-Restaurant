import { defineType, defineField } from "sanity";

const drinkCategories = defineType({
  title: "Drink Categories",
  name: "drinkCategories",
  type: "document",
  fields: [
    defineField({
      title: "Drink Category Name",
      name: "drinkCategoryName",
      type: "string",
    }),
  ],
});

export default drinkCategories;