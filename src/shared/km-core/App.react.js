import { Redirect, Route, Switch } from 'react-router-dom'

import MainPage from './MainPage.react'
import React from 'react'

const App = () => (
  <Switch>
    <Route exact path='/' component={MainPage} />
  </Switch>
)

export default App
