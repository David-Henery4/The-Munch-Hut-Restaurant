import { defineField, defineType, defineArrayMember } from "sanity";

const siteThemeColours = defineType({
  title: "Site Theme",
  name: "siteTheme",
  type: "document",
  fields: [
    defineField({
      title: "Light",
      name: "light",
      type: "simplerColor",
      options: {
        colorFormat: "hex",
        colorList: [
          { label: "Light", value: "custom" },
        ],
      },
    }),
    defineField({
      title: "Dark",
      name: "dark",
      type: "simplerColor",
      options: {
        colorFormat: "hex",
        colorList: [
          { label: "Dark", value: "custom" },
        ],
      },
    }),
    defineField({
      title: "Brand",
      name: "brand",
      type: "simplerColor",
      options: {
        colorFormat: "hex",
        colorList: [
          { label: "Brand", value: "custom" },
        ],
      },
    }),
    defineField({
      title: "Accent",
      name: "accent",
      type: "simplerColor",
      options: {
        colorFormat: "hex",
        colorList: [
          { label: "Accent", value: "custom" },
        ],
      },
    }),
  ],
});

export default siteThemeColours;
