import { defineField, defineType, defineArrayMember } from "sanity"

const story = defineType({
  title: "Our Story",
  name: "ourStory",
  type: "document",
  fields: [
    defineField({
      title: "Story Title",
      name: "storyTitle",
      type: "string",
    }),
    defineField({
      title: "Story",
      name: "story",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              {
                title: "Highlight",
                value: "highlight",
                component: (props) => (
                  <span style={{ backgroundColor: "#0f0" }}>
                    {props.children}
                  </span>
                ),
              },
            ],
          },
        },
      ],
    }),
    defineField({
      title: "Story Image",
      name: "storyImage",
      type: "image",
    }),
  ],
});

export default story