import { defineField, defineType } from "sanity";

const team = defineType({
  title: "The Team",
  name: "theTeam",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string"
    }),
    defineField({
      title: "Job Title",
      name: "jobTitle",
      type: "string"
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text"
    }),
    defineField({
      title: "Image of employee",
      name: "imageOfEmployee",
      type: "image",
    })
  ]
});

export default team;
