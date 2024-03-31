import { BodyText, ThirdHeader } from "@/components/shared"
import Form from "./form-body/Form";

const FormTitleAndBody = () => {
  return (
    <div className="w-full max-w-[688px] mx-auto smLap:flex-[2]">
      <div className="flex flex-col gap-2 text-center tab:text-left">
        <ThirdHeader>Book your appointment now</ThirdHeader>
        <BodyText>So our team can reach out to you on time</BodyText>
      </div>
      <Form />
    </div>
  );
}

export default FormTitleAndBody