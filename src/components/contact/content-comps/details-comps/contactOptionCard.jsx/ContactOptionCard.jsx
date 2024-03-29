import { BodyText } from "@/components/shared";

const ContactOptionCard = ({ contactOption, isValueArray = false }) => {
  //
  return (
    <>
      <div className="p-3 rounded-full grid place-items-center bg-red">
        <div className="w-6 h-6">
          <contactOption.icon className="h-full w-full" />
        </div>
      </div>
      {/**/}
      <div>
        <h3 className="text-2xl">{contactOption.label}</h3>
        {isValueArray ? (
          <div className="flex justify-start items-center gap-1 mt-2">
            {contactOption.value.map((valueIcon, i) => (
              <div key={i} className="w-6 h-6">
                <valueIcon.icon className="w-full h-full fill-white" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-2">
            <BodyText>{contactOption.value}</BodyText>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactOptionCard;
