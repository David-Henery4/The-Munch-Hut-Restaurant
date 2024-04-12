import { defineType, defineField } from "sanity"

const offers =  defineType({
  title: "Special Offers",
  name: "specialOffers",
  type: "document",
  fields: [
    defineField({
      title: "Offer",
      name: "offer",
      type: "string"
    }),
    defineField({
      title: "Offer Image",
      name: "offerImage",
      type: "image",
    })
  ]
})

export default offers