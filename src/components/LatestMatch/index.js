// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails

  return (
    <div className="style777">
      <div className="topBox7">
        <div>
          <p> {competingTeam} </p>
          <p> {date} </p>
          <p> {venue} </p>
          <p> {result} </p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            className="competingTeamLogo"
            alt={competingTeam}
          />
        </div>
      </div>
      <hr />
      <h1 className="head7"> First Innings </h1>
      <p> {firstInnings} </p>
      <h1 className="head7"> Second Innings </h1>
      <p> {secondInnings} </p>
      <h1 className="head7"> Man Of The Match </h1>
      <p> {manOfTheMatch} </p>
      <h1 className="head7"> Umpires </h1>
      <p> {umpires} </p>
    </div>
  )
}
export default LatestMatch
