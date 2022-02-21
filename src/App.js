import "./App.css";
import Header from "./Header";
import Checkout from'./Checkout'
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>

          <Route exact path="/">
            
            <Home />
          </Route>

          <Route path={'/checkout'}>
            <Checkout/>
            
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
