// Write your code here

import {Component} from 'react'

import './index.css'
import LatestMatch from '../LatestMatch'
import TeamMatches from '../TeamMatches'

class MatchCard extends Component {
  state = {teamTotalData: [], latestMatch: [], recentMatchesData: [], text: ''}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchdetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        secondInnings: data.latest_match_details.second_innings,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(item => ({
        competingTeam: item.competing_team,
        competingLogo: item.competing_team_logo,
        date: item.date,
        id: item.id,
        firstInnings: item.first_innings,
        manOfTheMatch: item.man_of_the_match,
        matchStatus: item.match_status,
        result: item.result,
        secondInnings: item.second_innings,
        umpires: item.umpires,
        venue: item.venue,
      })),
    }

    this.setState({
      teamTotalData: updatedData,
      latestMatch: updatedData.latestMatchdetails,
      recentMatchesData: updatedData.recentMatches,
      text: id,
    })
  }

  render() {
    const {teamTotalData, latestMatch, recentMatchesData, text} = this.state
    let news = ''
    switch (text) {
      case 'RCB':
        news = 'style1'
        break
      case 'CSK':
        news = 'style2'
        break
      case 'KKR':
        news = 'style3'
        break
      case 'RR':
        news = 'style4'
        break
      case 'MI':
        news = 'style5'
        break
      case 'SRH':
        news = 'style6'
        break
      case 'DC':
        news = 'style7'
      case 'KXP':
        news = 'style8'
        break
        break
      default:
        news = null
    }

    return (
      <div className={news}>
        <div className="teamBanBox">
          <img
            src={teamTotalData.teamBannerUrl}
            className="teamBannerStyle"
            alt="teamBanner"
          />
        </div>
        <h1 className="latestMatchHeading"> Latest Matches </h1>

        <div className="latestMatchBox">
          <LatestMatch matchDetails={latestMatch} />
        </div>

        <div className="recentMatchesBox">
          {recentMatchesData.map(item => (
            <TeamMatches matchesdetail={item} key={item.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default MatchCard
