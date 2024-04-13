import { FifthHeader, BodyText } from "../.."
import { client } from "../../../../../sanity/lib/client";

const ContactDets = async () => {
  const contactDetailData = await client.fetch(
    "*[_type == 'contactInformation'][0]{email, phoneNumber}",
    {},
    {
      next: {
        tags: ["contactDetailData"],
      },
    }
  );
  //
  return (
    <div className="smTab:col-start-7 smTab:col-end-12 smTab:row-start-2 smTab:row-end-2 smTab:justify-self-center lap:justify-self-auto lap:col-start-7 lap:col-end-10 lap:row-start-1 lap:row-end-3">
      <FifthHeader>Get In Touch</FifthHeader>
      <div className="mt-4">
        <BodyText>Email: {contactDetailData?.email}</BodyText>
        <BodyText>Phone: {contactDetailData?.phoneNumber}</BodyText>
      </div>
    </div>
  );
}

export default ContactDets