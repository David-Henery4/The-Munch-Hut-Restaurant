"use client";
import { useFormStatus } from "react-dom";
import { BodyText } from "@/components/shared";

const FormSubmitBtn = () => {
  const { pending } = useFormStatus();
  //
  return (
    <>
      {pending ? (
        <div className="rounded-md w-full p-3">
          <BodyText>Booking...</BodyText>
        </div>
      ) : (
        <button
          className="bg-red rounded-md w-full p-3 hover:bg-redHover active:bg-red"
          disabled={pending}
        >
          Book Now
        </button>
      )}
    </>
  );
};

export default FormSubmitBtn;
