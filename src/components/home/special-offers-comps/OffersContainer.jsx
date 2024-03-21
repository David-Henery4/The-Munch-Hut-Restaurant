import OffersCard from "./offers-card/OffersCard"

const OffersContainer = () => {
  return (
    <div className="w-full mt-20 grid gap-4">
      <OffersCard/>
      <OffersCard/>
      <OffersCard/>
    </div>
  )
}

export default OffersContainer