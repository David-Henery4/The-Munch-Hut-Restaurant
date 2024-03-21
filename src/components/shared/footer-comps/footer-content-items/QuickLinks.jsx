import navLinks from "@/link-list-data/navLinks";
import { FifthHeader } from "../..";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="smTab:col-start-2 smTab:col-end-7 lap:col-start-4 lap:col-end-7 lap:row-start-1 lap:row-end-4 lap:justify-self-center">
      <FifthHeader>Quick Links</FifthHeader>
      <ul className="grid gap-2 mt-4">
        {navLinks.map((linkInfo) => {
          return (
            <li key={linkInfo?.id}>
              <Link className="hover:text-redHover" href={linkInfo?.route}>
                {linkInfo?.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuickLinks;
