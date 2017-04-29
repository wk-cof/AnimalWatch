import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './App'

const MyRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/new-sighting" component={About}/>
    </div>
  </Router>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default MyRouter