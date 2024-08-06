import { CDN_URL } from "../utils/constants";

// Basic RestaurantCard Component
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 relative">
      <div className="relative">
        <img
          className="rounded-lg w-full h-48 object-cover"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        {/* Place discount info here */}
        <DiscountInfo discountInfo={props.discountInfo} />
      </div>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

// DiscountInfo Component
const DiscountInfo = ({ discountInfo }) => {
  if (!discountInfo) return null;

  return (
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white font-bold p-2 text-center rounded-b-lg text-sm truncate">
      <span>{discountInfo.header} - {discountInfo.subHeader}</span>
    </div>
  );
};

// Higher Order Component to add discount info
export const withOfferstext = (WrappedComponent) => {
  return (props) => {
    const { resData } = props;
    const {
      aggregatedDiscountInfoV2,
      aggregatedDiscountInfoV3,
    } = resData?.info;

    const discountInfo = aggregatedDiscountInfoV3 || aggregatedDiscountInfoV2;

    return (
      <WrappedComponent {...props} discountInfo={discountInfo} />
    );
  };
};

export default RestaurantCard;
