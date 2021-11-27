import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Matches from "./components/Matches/Matches";
import News from "./components/News/News";

function App() {
  return (
    <Router>
        <div className="wrap">
          <Navigation />
          <Switch>
              <Route path="/matches" component={Matches}/>
              <Route path="/" component={News}/>
          </Switch> 
        </div>
               
    </Router>
)
}

export default App;
