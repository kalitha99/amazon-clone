import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket,user }, dispatch] = useStateValue();

  const handleAuthentication = () =>{
    if (user){
      auth.signOut()//signout from firebase
    }
  }

  return (
    <div className="header">
      <Link to={"/"}>
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link  to={!user && '/login'}>
          <div className="header_option" onClick={handleAuthentication} >
            <span className="header_optionLineOne">hello {!user?"Guest":user.email}</span>
            <span className="header_optionLineTwo">{user? 'Sign Out':'Sign In'}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">Oreders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        
        <Link style={{ textDecoration: "none" }} to={"/checkout"}>
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
