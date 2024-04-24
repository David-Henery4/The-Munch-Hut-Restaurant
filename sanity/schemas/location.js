import { defineType, defineField } from "sanity"

const location = defineType({
  title: "Location Information",
  name: "locationInformation",
  type: "document",
  fields: [
    defineField({
      title: "Location",
      name: "location",
      type: "string",
      hidden: true,
      readOnly: true,
      initialValue: "Location",
    }),
    defineField({
      title: "Address",
      name: "address",
      type: "text",
    }),
    defineField({
      title: "Coordinates",
      name: "coordinates",
      type: "geopoint",
      description:
        "Used to get an accurate of the restaurant on the map. You can get this from google maps, find your location on the map, right click and copy your coordinates and enter them here! Latitude is first, Longitude is second. Altitude NOT needed.",
    }),
  ],
});

export default location