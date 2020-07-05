import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ColorList from './components/ColorList'
import Login from './components/Login'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <ColorList />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routes
