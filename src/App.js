import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <h1>Intro</h1>
        </Route>
        <Route path="/main" exact>
          <h1>Main</h1>
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
