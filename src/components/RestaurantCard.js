import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUtensils, faRupeeSign, faTag } from '@fortawesome/free-solid-svg-icons';

// Basic RestaurantCard Component
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-full sm:w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 relative border border-gray-300 shadow-lg transition-transform transform hover:scale-105"
    >
      <div className="relative">
        <img
          className="rounded-lg w-full h-auto sm:h-48 object-cover"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <DiscountInfo discountInfo={props.discountInfo} />
      </div>
      <h3 className="font-bold py-4 text-lg text-gray-800 text-center">{name}</h3>
      <div className="flex items-center text-gray-600 mb-2 text-sm">
        <FontAwesomeIcon icon={faUtensils} className="mr-2 text-gray-500" />
        <span>{cuisines.join(", ")}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2 text-sm">
        <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-500" />
        <span>{avgRating} stars</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2 text-sm">
        <FontAwesomeIcon icon={faRupeeSign} className="mr-2 text-green-500" />
        <span>{costForTwo}</span>
      </div>
    </div>
  );
};

// DiscountInfo Component
const DiscountInfo = ({ discountInfo }) => {
  if (!discountInfo) return null;

  return (
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white font-bold p-2 text-center rounded-b-lg text-xs truncate">
      <FontAwesomeIcon icon={faTag} className="mr-2" />
      <span>{discountInfo.header} - {discountInfo.subHeader}</span>
    </div>
  );
};

// Higher Order Component to add discount info
export const withOfferstext = (WrappedComponent) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV2, aggregatedDiscountInfoV3 } = resData?.info;
    const discountInfo = aggregatedDiscountInfoV3 || aggregatedDiscountInfoV2;

    return <WrappedComponent {...props} discountInfo={discountInfo} />;
  };
};

export default RestaurantCard;
