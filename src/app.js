import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
//import Groccery from "./components/Groccery";

/**
 * Components of our Food Ordering App
 * Header -> logo, nav items(home,about etc)
 * Body -> search, rest containers->rest cards->img,name,cuisines,star rating,delivery time
 * Footer -> copywright, social media links, information, address
 */

const Groccery = lazy(() => import("./components/Groccery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {

    const [userName, setuserName] = useState();

    //Authentication Logic
    useEffect(()=>{
        //Make an API call and send username and password
        const data = {
            name : "Ishan Gujarathi"
        }
        setuserName(data.name);
    },[]);

    return(
        <UserContext.Provider value={{loggedInUser : userName, setuserName}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path : "/",
                element: <Body/>,
            },

            {
                path: "/about",
                element:(
                <Suspense fallback = {<Shimmer/>}>
                    <About/>
                </Suspense>),
            },
        
            {
                path: "/contact",
                element: <Contact/>,
            },

            {
                path: "/groccery",
                element:( 
                <Suspense fallback={<Shimmer/>}>
                    <Groccery/>
                </Suspense>
                ),
            },

            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
        ],
        errorElement: <Error/>,
    },

   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
