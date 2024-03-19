import Link from "next/link"

const BookLink = () => {
  return (
    <Link
      href="/booking"
      className="w-32 py-2 text-center bg-red rounded-md hover:bg-redHover active:bg-red"
    >
      Book Now
    </Link>
  );
}

export default BookLink