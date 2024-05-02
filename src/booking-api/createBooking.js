import { client } from "../../sanity/lib/client";

const createBooking = async ({ bookingFormData }) => {
  //
  const mutation = {
    mutations: [
      {
        create: {
          _type: "bookings",
          ...bookingFormData,
        },
      },
    ],
  };
  //
  const updatedData = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-03-18/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}`,
      },
      body: JSON.stringify(mutation)
    }
  );
  console.log(updatedData)
  return updatedData
};

export default createBooking;
