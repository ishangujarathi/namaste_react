import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";

const Body = () => {

  //Local State Variable -> Super Powerful Variable
  const [listofRestaurants,setlistofRestaurants] = useState(resList);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setlistofRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };
  return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            const filteredlist = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setlistofRestaurants(filteredlist);
            console.log(listofRestaurants);
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {listofRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;