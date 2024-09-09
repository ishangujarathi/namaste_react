import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
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
    return <h1>Looks like you're Offline!! Please check your Internet Connection!</h1>;
  }

  const { loggedInUser, setuserName } = useContext(UserContext);

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Flex container for search, buttons, and username */}
      <div className="filter flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
        {/* Search Bar */}
        <div className="search flex items-center flex-grow mr-4">
          <input
            type="text"
            data-testid="search_input"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            value={searchText}
            placeholder="Search restaurants"
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
            onClick={() => {
              const filteredlistofrestaurants = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredlistofrestaurants);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200 mr-4"
          onClick={() => {
            const filteredlist = listofRestaurants.filter((res) => res.info.avgRating > 4);
            setfilteredRestaurant(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>

        {/* Username Input */}
        <div className="username flex items-center">
          <label className="mr-2">Username:</label>
          <input
            className="border border-gray-300 rounded-lg px-4 py-2"
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 max-w-screen-xl mx-auto">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
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
