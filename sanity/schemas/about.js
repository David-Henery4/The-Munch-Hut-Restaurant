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
      readOnly: true,
      title: "Home About Paragraph Field",
      name: "homeAbout",
      type: "string",
      initialValue: "About Paragraph (Home Page)",
    }),
    defineField({
      title: "Home About Paragraph",
      name: "homeAboutParagraph",
      type: "text",
      description:
        "A short paragraph to be displayed in the about section, on the home page.",
    }),
  ],
});

export default about;
