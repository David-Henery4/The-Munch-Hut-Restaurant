import { defineField, defineType } from "sanity";
import { SimplerColorInput } from "@/components/color-input/ColourInput";
import { TextColorAnnotation } from "@/components/color-input/TextColourAnnotation"

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
            annotations: [
              {
                type: "textColor",
                options: {
                  colorList: [
                    {
                      label: "Light",
                      value: "#ffffff",
                    },
                    { label: "Dark", value: "#333333" },
                    { label: "Brand", value: "#ca786d" },
                    { label: "Accent", value: "#626754" },
                    { label: "Custom...", value: "custom" },
                  ],
                },
                components: {
                  input: SimplerColorInput,
                  annotation: TextColorAnnotation
                }
              },
              { type: "highlightColor" },
              {
                type: "reference",
                name: "textColorSelect",
                title: "Text Color Select",
                to: [
                  {
                    type: "siteTheme",
                  },
                ],
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

export default story;
