import { defineField, defineType } from "sanity";

const about = defineType({
  title: "About Us (Home)",
  name: "aboutUsHomePage",
  type: "document",
  preview: "",
  description:
    "A short paragraph to be displayed in the about section, on the home page.",

  fields: [
    defineField({
      title: "About Paragraph",
      name: "homeAboutText",
      type: "text",
      description:
        "A short paragraph to be displayed in the about section, on the home page.",
      placeholder:
        "A short paragraph to be displayed in the about section, on the home page.",
    }),
    defineField({
      readOnly: true,
      title : "About Paragraph",
      name: "homeAbout",
      type: "string"
    })
  ],
});

export default about;
