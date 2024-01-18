// Write your code her
import {Component} from 'react'

import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.getAllTeams()
  }

  getAllTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))
    console.log(updatedData)
    this.setState({teamsList: updatedData})
  }

  render() {
    const {teamsList} = this.state

    return (
      <div className="homeBox">
        <div className="homeHeadingBox">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            className="homeLogo"
            alt="logo"
          />
          <h1> IPL Dashboard </h1>
        </div>

        <div className="teamsBox">
          {teamsList.map(item => (
            <TeamCard itemDetails={item} key={item.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
