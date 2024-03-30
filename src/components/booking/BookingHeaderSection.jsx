import { PrimaryHeader,BodyText, MenuLink } from "../shared";

const BookingHeaderSection = () => {
  return (
    <header className="col-start-2 col-end-12 text-center flex flex-col justify-center items-center gap-8 py-12 border-b-2 border-b-gold">
      <PrimaryHeader>
        Book your table at the <span className="text-red">munch hut!</span>
      </PrimaryHeader>
      <div className="grid gap-6 justify-items-center">
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
