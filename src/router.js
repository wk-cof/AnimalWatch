import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './App'
import NewSighting from './new-sighting'

const MyRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/new-sighting" component={NewSighting}/>
    </div>
  </Router>
)

export default MyRouter