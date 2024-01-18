// Write your code here
import './index.css'

const TeamMatches = props => {
  const {matchesdetail} = props
  const {competingTeam, competingLogo, result, matchStatus} = matchesdetail

  return (
    <div className="recentMatchBox">
      <img src={competingLogo} className="teamLogo7" alt={competingTeam} />
      <p> {competingTeam} </p>
      <p> {result} </p>
      <p> {matchStatus} </p>
    </div>
  )
}
export default TeamMatches
