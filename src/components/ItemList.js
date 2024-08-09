import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faDollarSign, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));  // the item will be passed as an object like { payload: "item" }

    // Display success message
    toast.success(
      <div className="flex items-center">
        <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
        Item added to Cart Successfully!
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 border border-gray-200 rounded-lg shadow-sm flex bg-white"
        >
          <div className="w-8/12 pr-4">
            <h3 className="font-semibold text-lg mb-2">{item.card.info.name}</h3>
            <div className="flex items-center mb-2 text-gray-800">
              <FontAwesomeIcon icon={faDollarSign} className="mr-1 text-green-600" />
              <span>
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{item.card.info.description}</p>
          </div>
          <div className="w-4/12 flex flex-col items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <button
              className="flex items-center px-3 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
              onClick={() => handleAddItem(item)}
            >
              <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
