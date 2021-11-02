import { Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage'
import React from 'react'
import SignUpPage from './pages/SignUpPage'
import IntroPage from './pages/IntroPage'
import SignInPage from './pages/SignInPage'
<<<<<<< HEAD
=======
import MyTreePage from './pages/MyTreePage'
import FeedPage from './pages/FeedPage'
>>>>>>> f01a3e2cfc030d740d1b70dbf45d44b32f512ac4
import NotFoundPage from './pages/NotFoundPage'
import SettingPage from './pages/SettingPage'

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
<<<<<<< HEAD
        <Route path="/feed/:id">
=======
        <Route path="/feed/:id" exact>
          <FeedPage />
        </Route>
        {/* <Route path="/feed/:id">
>>>>>>> f01a3e2cfc030d740d1b70dbf45d44b32f512ac4
          <h1>Feed/id</h1>
        </Route> */}
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
    </div>
  )
}

export default App
