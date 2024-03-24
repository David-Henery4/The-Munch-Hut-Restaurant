import TeamCard from "./team-card/TeamCard"

const TeamGrid = () => {
  return (
    <div className="w-full grid gap-6 mt-14">
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
    </div>
  )
}

export default TeamGrid