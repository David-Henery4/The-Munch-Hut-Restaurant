import { BodyText } from "@/components/shared";
// import { Icon} from "@iconify/react";
import Link from "next/link";
import { PhoneIcon, EmailIcon, GridIcon } from "../../../../../../public/assets";
import { IconContainer } from "@/components/shared";

const ContactOptionCard = ({ name, value, isValueArray = false }) => {
  //
  const label =
    name === "email" ? "Email" : name === "phoneNumber" ? "Phone" : "Socials";
  const icons =
    name === "email" ? <EmailIcon className="h-full w-full"/> : name === "phoneNumber" ? <PhoneIcon className="h-full w-full"/> : <GridIcon className="h-full w-full"/>;
  //
  return (
    <>
      <div className="p-3 rounded-full grid place-items-center bg-red">
        <div className="w-6 h-6">
          {icons}
        </div>
      </div>
      {/**/}
      <div>
        <h3 className="text-2xl">{label}</h3>
        {isValueArray ? (
          <div className="flex justify-start items-center gap-1 mt-2">
            {value.map((valueIcon, i) => {
              return (
                <div key={i} className="w-6 h-6">
                  <Link
                    href={valueIcon?.socialUrl}
                    className="w-full h-full fill-white"
                  >
                    <IconContainer iconName={valueIcon?.socialIcon?.name} />
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-2">{<BodyText className="break-all">{value}</BodyText>}</div>
        )}
      </div>
    </>
  );
};

export default ContactOptionCard;
