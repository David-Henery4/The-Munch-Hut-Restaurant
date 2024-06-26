import { defineType, defineField } from "sanity";

// Maybe add images to schema for the carousel

const homeMenuDescription = defineType({
  title: "Menu Description (Home)",
  name: "homeMenuDescription",
  type: "document",
  fields: [
    defineField({
      title: "Description Title",
      name: "descriptionTitle",
      type: "string"
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text"
    }),
    defineField({
      title: "Menu Slider Images",
      name: "menuSliderImages",
      type: "array",
      of: [
        {type: "image"}
      ]
    }),
  ]
})

export default homeMenuDescription