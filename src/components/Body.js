import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

  //Local State Variable -> Super Powerful Variable
  const [listofRestaurants,setlistofRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  //whenever a State Variable changes, React Trigger's a Reconciliation algorithm (re-renders the entire component);
  
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onLineStatus = useOnlineStatus();

  if(onLineStatus === false){
    return <h1>Looks like you're Offline!! Please check your Internet Connection!</h1>
  };

  return listofRestaurants.length === 0 ? (
  <Shimmer/>
    ) :  (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value = {searchText} onChange={(e)=>{
              setsearchText(e.target.value);
            }}/>
            <button onClick={()=>{
              //Filter the restaurant cards and update the UI
              const filteredlistofrestaurants = listofRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                });
               
              setfilteredRestaurant(filteredlistofrestaurants);
            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={() => {
            const filteredlist = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistofRestaurants(filteredlist);
            console.log(listofRestaurants);
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
          ))}
        </div>
      </div>
    );
  };

export default Body;