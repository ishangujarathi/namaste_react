import RestaurantCard from "./Restaurantcard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

  //Local State Variable -> Super Powerful Variable
  const [listofRestaurants,setlistofRestaurants] = useState(resList);
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