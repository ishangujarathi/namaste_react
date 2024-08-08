import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faCarrot, faShoppingCart, faTag } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ icon, title, description }) => (
  <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <FontAwesomeIcon icon={icon} className="text-4xl mb-4" />
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Groccery = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
        Welcome to Our Grocery Store
      </h1>
      <p className="text-lg mb-8 text-gray-700">
        Discover a variety of fresh products and essentials tailored to your needs. Explore our categories and shop with ease.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ProductCard
            icon={faAppleAlt}
            title="Fruits"
            description="Fresh and juicy fruits for a healthy diet."
          />
          <ProductCard
            icon={faCarrot}
            title="Vegetables"
            description="Organic vegetables to keep you fit and healthy."
          />
          <ProductCard
            icon={faShoppingCart}
            title="Daily Essentials"
            description="Everything you need for your daily routine."
          />
          <ProductCard
            icon={faTag}
            title="Offers & Discounts"
            description="Exciting deals and promotions just for you."
          />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 mb-2">$10.00</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 mb-2">$12.00</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
          {/* Add more product cards here */}
        </div>
      </div>
    </div>
  );
};

export default Groccery;
