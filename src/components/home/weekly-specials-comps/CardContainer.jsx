import SpecialsCard from "./card-comps/SpecialsCard";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-flexible gap-9 mt-16 lgMob:grid-cols-flexibleMedium">
      <SpecialsCard/>
      <SpecialsCard/>
      <SpecialsCard/>
      <SpecialsCard/>
    </div>
  );
}

export default CardContainer