import { BookingIcon } from "../../../../public/assets";
import Link from "next/link";

const BookingBtn = () => {
  return (
    <div className="hidden w-[50px] h-[50px] tab:grid bg-red rounded-full place-items-center hover:cursor-pointer hover:bg-redHover">
      <Link href="/booking" className="text-sm font-light inline-block">
        <BookingIcon />
      </Link>
    </div>
  );
};

export default BookingBtn;
