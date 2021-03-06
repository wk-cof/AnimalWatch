import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import App from './App';
import NewSighting from './new-sighting';
import Map from './Map';


////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton/>
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/new-sighting">Protected Page</Link></li>
      </ul>
      <Route path="/public" component={Map}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/new-sighting" component={NewSighting}/>
    </div>
  </Router>
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <Button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</Button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

// const Public = () => {App}
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default AuthExample


/*import React from 'react';
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

export default MyRouter*/