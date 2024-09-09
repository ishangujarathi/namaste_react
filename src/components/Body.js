import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FaSearch, FaStar, FaUser } from "react-icons/fa"; // Import Font Awesome icons
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { withOfferstext } from "./RestaurantCard";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestaurantCardwithOffers = withOfferstext(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onLineStatus = useOnlineStatus();

  if (onLineStatus === false) {
    return (
      <h1 className="text-center text-red-600 font-bold text-xl">
        Looks like you're Offline! Please check your Internet Connection!
      </h1>
    );
  }

  const { loggedInUser, setuserName } = useContext(UserContext);

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-4 sm:p-6 lg:p-8">
      <div className="filter flex flex-col sm:flex-row sm:justify-between items-center">
        {/* Search Bar */}
        <div className="search mb-4 sm:mb-0 sm:m-4 sm:p-4 w-full sm:w-auto flex items-center">
          <input
            type="text"
            data-testid="search_input"
            className="border border-solid border-black rounded-lg w-full sm:w-80 p-2 focus:outline-none focus:border-blue-500"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            placeholder="Search restaurants..."
          />
          <button
            className="flex items-center px-4 py-2 bg-green-500 text-white ml-2 rounded-lg hover:bg-green-600 transition duration-200"
            onClick={() => {
              const filteredlistofrestaurants = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredlistofrestaurants);
            }}
          >
            <FaSearch className="mr-2" /> Search
          </button>
        </div>

        {/* Top-rated Restaurants Button */}
        <div className="top-rated m-4 p-4 flex items-center">
          <button
            className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
            onClick={() => {
              const filteredlist = listofRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setfilteredRestaurant(filteredlist);
            }}
          >
            <FaStar className="mr-2" /> Top Rated Restaurants
          </button>
        </div>

        {/* Username Input */}
        <div className="username-input m-4 p-4 flex items-center">
          <FaUser className="mr-2 text-gray-500" />
          <input
            className="border border-black p-2 rounded-lg w-full sm:w-auto focus:outline-none focus:border-blue-500"
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="restaurant-grid flex flex-wrap justify-center sm:justify-start">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="w-full sm:w-1/2 lg:w-1/3 p-2"
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardwithOffers resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
