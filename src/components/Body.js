import RestaurantCard,{withOfferstext} from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

  //Local State Variable -> Super Powerful Variable
  const [listofRestaurants,setlistofRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  console.log(listofRestaurants);

  const [searchText, setsearchText] = useState("");

  const RestaurantCardwithOffers = withOfferstext(RestaurantCard);

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
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black" value = {searchText} onChange={(e)=>{
              setsearchText(e.target.value);
            }}/>
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
              //Filter the restaurant cards and update the UI
              const filteredlistofrestaurants = listofRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                });
               
              setfilteredRestaurant(filteredlistofrestaurants);
            }}>Search</button>
          </div>
          <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
            const filteredlist = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistofRestaurants(filteredlist);
            console.log(listofRestaurants);
          }}>Top Rated Restaurants</button>
          </div> 
        </div>
        <div className=" flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
             {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardwithOffers resData={restaurant} />
             ) : (<RestaurantCard resData={restaurant} />
             )
            }
          </Link>
          ))}
        </div>
      </div>
    );
  };

export default Body;