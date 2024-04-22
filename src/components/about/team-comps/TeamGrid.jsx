import TeamCard from "./team-card/TeamCard"
import { client } from "../../../../sanity/lib/client"
import { revalidateTag } from "next/cache";


const TeamGrid = async () => {
  const teamList = await client.fetch(
    "*[_type == 'theTeam']{_id, jobTitle, name, description, imageOfEmployee}",
    {},
    { next: { tags: ["teamList"] } }
  );
  revalidateTag("teamList")
  //
  return (
    <div className="w-full grid gap-10 mt-14 max-w-[1160px] mx-auto justify-items-center smTab:grid-cols-teamGridColsTab lap:grid-cols-teamGridColsLap lap:justify-items-stretch">
      {teamList.map((teamItem) => {
        return <TeamCard key={teamItem._id} {...teamItem} />;
      })}
      {/* <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard /> */}
    </div>
  );
}

export default TeamGrid