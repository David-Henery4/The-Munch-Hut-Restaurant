import { defineType, defineField } from "sanity";

const contact = defineType({
  title: "Contact Information",
  name: "contactInformation",
  type: "document",
  fieldsets: [
    {
      name: "socials",
      title: "Socials",
    },
  ],
  fields: [
    defineField({
      title: "Email",
      name: "email",
      type: "string",
    }),
    defineField({
      title: "Phone Number",
      name: "phoneNumber",
      type: "string",
    }),
    // defineField({
    //   title: "Social Media",
    //   name: "socialMedia",
    //   type: "object",
    //   // fields: [
    //   //   defineField({
    //   //     name:
    //   //   })
    //   // ]
    // })
    defineField({
      title: "Social",
      name: "social",
      type: "array",
      fieldset: "socials",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              title: "Social Name",
              name: "socialName",
              type: "string",
            }),
            defineField({
              title: "Social Url",
              name: "socialUrl",
              type: "string"
            }),
            defineField({
              title: "Social Icon",
              name: "socialIcon",
              type: "icon"
            })
          ],
        },
      ],
    }),
  ],
});

export default contact;
