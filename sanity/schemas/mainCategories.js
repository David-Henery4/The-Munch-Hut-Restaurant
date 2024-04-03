import { defineType, defineField } from "sanity";

const mainCategories = defineType({
  title: "Main Categories",
  name: "mainCategories",
  type: "document",
  fields: [
    defineField({
      title: "Main Category Name",
      name: "mainCategoryName",
      type: "string",
    }),
  ]
})

export default mainCategories