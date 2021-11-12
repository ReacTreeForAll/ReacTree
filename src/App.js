import { Route, Switch } from 'react-router-dom'
import MainPage from '@pages/MainPage'
import React from 'react'
import SignUpPage from '@pages/SignUpPage'
import IntroPage from '@pages/IntroPage'
import SignInPage from '@pages/SignInPage'
import MyTreePage from '@pages/MyTreePage'
import FeedPage from '@pages/FeedPage'
import NotFoundPage from '@pages/NotFoundPage'
import SettingPage from '@pages/SettingPage'

function App() {
  return (
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
      <Route path="/feed/:id" exact>
        <FeedPage />
      </Route>
      <Route path="/mytree">
        <MyTreePage />
      </Route>
      <Route path="/settings" exact>
        <SettingPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  )
}

export default App
