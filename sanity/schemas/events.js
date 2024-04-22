import { defineType, defineField } from "sanity";

const events = defineType({
  title: "Events",
  name: "events",
  type: "document",
  // __experimental_formPreviewTitle: false,
  preview: {
    select: {
      title: "eventsPageContent"
    },
  },
  fields: [
    defineField({
      title: "Events Page Content",
      name: "eventsPageContent",
      type: "string",
      hidden: true,
      readOnly: true,
      initialValue: "Events Page Content",
    }),
    defineField({
      title: "Events Description",
      name: "eventsDescription",
      type: "text",
    }),
    defineField({
      title: "Events",
      name: "events",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              title: "Event Name",
              name: "eventName",
              type: "string",
            }),
            defineField({
              title: "Event Image",
              name: "eventImage",
              type: "image",
            }),
          ],
        },
      ],
    }),
  ],
});

export default events;
