import { defineType, defineField } from "sanity";

const FoodCategories = defineType({
  title: "Food Categories",
  name: "FoodCategories",
  type: "document",
  fields: [
    defineField({
      title: "Food Category Name",
      name: "FoodCategoryName",
      type: "string",
    }),
  ],
});

export default FoodCategories;