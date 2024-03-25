import TeamCard from "./team-card/TeamCard"

const TeamGrid = () => {
  return (
    <div className="w-full grid gap-6 mt-14 max-w-[1160px] mx-auto justify-items-center smTab:grid-cols-teamGridColsTab lap:grid-cols-teamGridColsLap lap:justify-items-stretch lap:gap-10">
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
    </div>
  )
}

export default TeamGrid