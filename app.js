import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Components of our Food Ordering App
 * Header -> logo, nav items(home,about etc)
 * Body -> search, rest containers->rest cards->img,name,cuisines,star rating,delivery time
 * Footer -> copywright, social media links, information, address
 */

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resName,cuisine,rating,eta} = props
    console.log(resName);
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/4fe928562d04e0a5c25f335e866dad71"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} Stars</h4>
            <h4>{eta} mins</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="rest-container">
                <RestaurantCard resName="Meghana Foods" cuisine="Biryanis, North Indian, South Indian" rating="4.4" eta="30"/>
                <RestaurantCard resName="KFC" cuisine="Burger,Winger Box, Coak" rating="4.2" eta="30"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
