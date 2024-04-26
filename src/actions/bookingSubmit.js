"use server";

const handleBookingSubmit = async (currentState, formData) => {
  // console.log(currentState)
  // console.log(formData)
  //
  let rawData = {};
  for (const pair of formData.entries()) {
    const isString = typeof pair[0] === "string";
    if (isString && !pair[0].includes("$ACTION_")) {
      rawData = {
        [pair[0]]: pair[1],
        ...rawData,
      };
    }
  }
  console.log(rawData);
  return rawData;
};

export default handleBookingSubmit;
