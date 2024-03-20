import SpecialsCard from "./card-comps/SpecialsCard";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-flexible gap-9 mt-16">
      <SpecialsCard/>
      <SpecialsCard/>
      <SpecialsCard/>
      <SpecialsCard/>
    </div>
  );
}

export default CardContainer