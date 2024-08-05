import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const onLineStatus = useOnlineStatus();

  const [btnName,setbtnName] = useState("Login");

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div className="logo-container">
          <img className= "w-32" src = {LOGO_URL}/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-5 m-5">
            <li className="px-5">Online Status :{onLineStatus ? "🟢" : "🔴"} </li>
            <li className="px-5">
              <Link to="/">Home</Link>
            </li>
            <li className="px-5">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-5">
              <Link to="/contact"> Contact Us </Link>
            </li>
            <li className="px-5">
              <Link to="/groccery"> Groccery </Link>
            </li>
            <li className="px-5">Cart</li>
            <button className="login px-5" onClick={()=>{
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;