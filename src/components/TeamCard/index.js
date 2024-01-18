// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {itemDetails} = props
  const {id, teamImageUrl, name} = itemDetails

  return (
    <Link to={`/ipl/${id}`} className="linkteamsCard">
      <div className="teamCardBoxStyle">
        <img src={teamImageUrl} className="teamCardImage" alt={name} />
        <div>
          <p> {name} </p>
        </div>
      </div>
    </Link>
  )
}
export default TeamCard
