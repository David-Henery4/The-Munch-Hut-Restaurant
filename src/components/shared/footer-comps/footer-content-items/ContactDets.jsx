import { FifthHeader, BodyText } from "../.."

const ContactDets = () => {
  return (
    <div className="smTab:col-start-7 smTab:col-end-12 smTab:row-start-2 smTab:row-end-2 smTab:justify-self-center lap:justify-self-auto lap:col-start-7 lap:col-end-10 lap:row-start-1 lap:row-end-3">
      <FifthHeader>Get In Touch</FifthHeader>
      <div className="mt-4">
        <BodyText>Email: contact@mysite.com</BodyText>
        <BodyText>Phone: 123-456-7890</BodyText>
      </div>
    </div>
  );
}

export default ContactDets