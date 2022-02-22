import "./App.css";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from './Login'
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

          <Route path={"/checkout"}>
            <Checkout />
          </Route>

          <Route path={"/login"}>
           <Login />
            
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
