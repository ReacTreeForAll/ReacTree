import { Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage'
import React from 'react'
import SignUpPage from './pages/SignUpPage'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <h1>Intro</h1>
        </Route>
        <Route path="/signup" exact>
          <SignUpPage />
        </Route>
        <Route path="/signin" exact>
          <h1>SignIn</h1>
        </Route>
        <Route path="/main" exact>
          <MainPage />
        </Route>
        <Route path="/main/:id">
          <h1>Main/id</h1>
        </Route>
        <Route path="/feed" exact>
          <h1>Feed</h1>
        </Route>
        <Route path="/feed/:id">
          <h1>Feed/id</h1>
        </Route>
        <Route path="/mytree">
          <h1>MyTree</h1>
        </Route>
        <Route path="/settings">
          <h1>Settings</h1>
        </Route>
        <Route path="*">
          <h1>NotFound</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App
