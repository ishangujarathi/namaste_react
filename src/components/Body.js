import RestaurantCard from "./Restaurantcard";

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

export default Body;