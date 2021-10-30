import { Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage'
import React from 'react'
import SignUpPage from './pages/SignUpPage'
import IntroPage from './pages/IntroPage'
import SignInPage from './pages/SignInPage'
import Test from './components/domain/PostContentsContainer/Test'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <IntroPage />
        </Route>
        <Route path="/signup" exact>
          <SignUpPage />
        </Route>
        <Route path="/signin" exact>
          <SignInPage />
        </Route>
        <Route path="/main/:id" exact>
          <MainPage />
        </Route>
        <Route path="/feed" exact>
          <Test />
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
