import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import RepoList from './components/RepoList'
import RepoDetails from './components/RepoDetails'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RepoList} />
        <Route path="/repo/:owner/:name" component={RepoDetails} />
      </Switch>
    </Router>
  )
}

export default App
