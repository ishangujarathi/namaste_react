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

export default RestaurantCard;