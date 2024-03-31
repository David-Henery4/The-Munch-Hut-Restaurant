import { BodyText, MenuLink } from "../shared";

const BookingHeaderSection = () => {
  return (
    <header className="col-start-2 col-end-12 text-center flex flex-col justify-center items-center gap-8 py-12 border-b-2 border-b-gold tab:flex-row tab:text-left tab:gap-12 tab:justify-between tab:items-end tab:py-20 desk:py-28">
      <h1 className="text-6xl font-pompiere max-w-[515px] mx-auto XtraSmTab:text-7xl tab:m-0 tab:flex-[3] tab:mb-auto desk:text-8xl desk:max-w-none">
        Book your table at the <span className="text-red">munch hut!</span>
      </h1>
      <div className="grid gap-6 justify-items-center max-w-[290px] mx-auto tab:flex-[2] tab:justify-items-start tab:mr-0 lap:max-w-[340px]">
        <BodyText>
          A short description introducing your business and services to
          visitors. Check out our menu before booking if you need to.
        </BodyText>
        <MenuLink isNotHeader={true} />
      </div>
    </header>
  );
};

export default BookingHeaderSection;
