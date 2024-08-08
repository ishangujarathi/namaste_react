import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const onLineStatus = useOnlineStatus();

  const [btnName,setbtnName] = useState("Login");

  const {loggedInUser} = useContext(UserContext);

  //Selector is a Hook in React. Subscribing to the store using Selector. 

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
            <li className="px-5 font-bold text-xl">
                <Link to="/cart">
                    Cart - ({cartItems.length} items)
                </Link>
            </li>
            <button className="login px-5" onClick={()=>{
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}>{btnName}</button>
            <li className="px-5 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;