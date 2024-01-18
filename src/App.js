import {Switch, Route} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import MatchCard from './components/MatchCard'
import NotFound from './components/NotFound'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ipl/:id" component={MatchCard} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
