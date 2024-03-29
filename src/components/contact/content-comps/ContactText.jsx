import { SecondaryHeader, BodyText, BookLink } from "@/components/shared";

const ContactText = () => {
  return (
    <div className="w-full grid text-center gap-6 justify-items-center smTab:justify-items-stretch smTab:text-left smTab:gap-x-12">
      <SecondaryHeader>Let’s stay connected</SecondaryHeader>
      <div className="max-w-[355px] mx-auto smTab:row-start-2 smTab:row-end-3 smTab:m-0 smTab:max-w-[550px]">
        <BodyText>
          It&apos;s never been easier to get in touch with Flex. Call us, use
          our live chat widget or email and we&apos;ll get back to you as soon
          as possible!
        </BodyText>
      </div>
      <div className="smTab:row-start-2 smTab:row-end-3 flex smTab:justify-self-end smTab:self-start">
        <BookLink />
      </div>
    </div>
  );
};

export default ContactText;
