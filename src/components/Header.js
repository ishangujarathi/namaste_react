import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const onLineStatus = useOnlineStatus();

  const [btnName,setbtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src = {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status :{onLineStatus ? "🟢" : "🔴"} </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact"> Contact Us </Link>
            </li>
            <li>
              <Link to="/groccery"> Groccery </Link>
            </li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;