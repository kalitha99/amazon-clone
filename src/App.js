import "./App.css";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from './Login'
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51KWFYGDXB1RTaY3BZ6ZYHWXfYCTB9T9cGoMiQDPLqC7EvLGtLuXIK1ZRYpErh2lXtryUKaDs0dkJ8mOqxovNKIuN00KRNNuk9v')

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

          <Route path={"/payment"}>
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>

          <Route path={"/orders"}>
           <Orders />
            
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
