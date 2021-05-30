import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TopStories from './Components/TopStories';


function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/top-stories">
          <TopStories />
        </Route>
      </Switch>

    </Router>


  );
}

export default App;
