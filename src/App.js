import "./App.css";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const[{},dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log('user',authUser)

      if (authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])

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
