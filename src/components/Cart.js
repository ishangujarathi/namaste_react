import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons/faRupeeSign"; 

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

 
  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.card.info.price
      ? item.card.info.price / 100
      : item.card.info.defaultPrice / 100;
    return total + price;
  }, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-6">Cart</h1>
      <div className="w-full lg:w-8/12 xl:w-6/12 mx-auto bg-white p-6 rounded-lg shadow-lg">
        <button
          className="w-full py-2 mb-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h1 className="text-xl text-gray-700 text-center">Cart is empty, please add items to your cart!</h1>
        ) : (
          <>
            <ItemList items={cartItems} />
            <div className="mt-4 text-xl font-semibold flex items-center">
              Total Price: <FontAwesomeIcon icon={faRupeeSign} className="mx-2" /> 
              {totalPrice.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
