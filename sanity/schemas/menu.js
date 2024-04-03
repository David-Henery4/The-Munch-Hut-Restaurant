import { defineField, defineType } from "sanity";

const menu = defineType({
  title: "Menu",
  name: "menu",
  type: "document",
  fieldsets: [
    {
      name: "food",
      title: "Food options on menu",
    },
    {
      name: "drink",
      title: "Drink options on menu",
    },
    {
      name: "Specials",
      title: "Weekly specials",
    },
  ],
  fields: [
    defineField({
      title: "Food Title",
      name: "foodTitle",
      type: "string",
      fieldset: "food"
    }),
    defineField({
      title: "Food Description",
      name: "foodDescription",
      type: "string",
      fieldset: "food"
    }),
    defineField({
      title: "Drink Title",
      name: "drinkTitle",
      type: "string",
      fieldset: "drink"
    }),
    defineField({
      title: "Drink Description",
      name: "drinkDescription",
      type: "string",
      fieldset: "drink"
    }),
  ],
});

export default menu;
