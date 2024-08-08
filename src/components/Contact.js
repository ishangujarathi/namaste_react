import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Contact Us</h1>
      <div className="w-full lg:w-8/12 xl:w-6/12 mx-auto bg-white p-8 rounded-lg shadow-md">
        <form>
          <div className="mb-4 flex items-center border-b-2 border-gray-300">
            <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-3" />
            <input
              className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-0"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4 flex items-center border-b-2 border-gray-300">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-3" />
            <input
              className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-0"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              <FontAwesomeIcon icon={faCommentDots} className="text-gray-500 mr-3" />
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
