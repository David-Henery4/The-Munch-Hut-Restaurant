import OffersCard from "./offers-card/OffersCard"
import { client } from "../../../../sanity/lib/client"
import { revalidateTag } from "next/cache"


const OffersContainer = async () => {
  const offersList = await client.fetch("*[_type == 'specialOffers']{offer,offerImage, _id}", {}, {next: {
    tags: ["offersList"]
  }})
  revalidateTag("offersList")
  console.log(offersList)
  //
  return (
    <div className="w-full mt-20 grid gap-4 max-w-[2560px] mx-auto">
      {offersList.map((offerData) => {
        return <OffersCard key={offerData._id} {...offerData} />;
      })}
    </div>
  )
}

export default OffersContainer