import { defineField, defineType } from "sanity";

const gallery = defineType({
  title: "Gallery Content",
  name: "galleryContent",
  type: "document",
  fields: [
    defineField({
      title: "Gallery Page",
      name: "galleryPage",
      type: "string",
      hidden: true,
      readOnly: true,
      initialValue: "Gallery Page",
    }),
    defineField({
      title: "Gallery Description",
      name: "galleryDescription",
      type: "text"
    }),
    defineField({
      title: "Gallery Images",
      name: "galleryImages",
      type: "array",
      of: [{type: "image"}]
    })
  ],
});

export default gallery