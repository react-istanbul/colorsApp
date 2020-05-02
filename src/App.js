import './App.css'

import React from 'react'
import { Provider } from 'react-redux'

import LoginPersister from './components/LoginPersister'
import store from './redux/store'
import Routes from './Routes'

function App() {
  return (
    <Provider store={store}>
      <LoginPersister />
      <Routes />
    </Provider>
  )
}

export default App
