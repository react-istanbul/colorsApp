import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

const Routes = () => (
  <BrowserRouter>
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
)


export default Routes