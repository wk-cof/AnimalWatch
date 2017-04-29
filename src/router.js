import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './App'
import NewSighting from './new-sighting'
import Map from './Map'

const MyRouter = () => (
  <Router>
    <div>
      <App />
      <Route exact path="/" component={Map}/>
      <Route path="/new-sighting" component={NewSighting}/>
    </div>
  </Router>
)

export default MyRouter