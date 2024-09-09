import React from "react";
import UserClass from "./UserClass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';  
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';  

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container mx-auto my-10 p-4 sm:p-6 bg-gray-100 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300 ease-in-out font-sans">
        <div className="max-w-3xl mx-auto">
          {/* About Header */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 flex items-center justify-center relative">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2 text-blue-500 text-4xl sm:text-5xl" />
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">About Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20 blur-sm"></span>
            </h1>

            {/* Application Name */}
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              BiteStream
            </h2>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-base sm:text-lg mb-6 text-gray-700 mx-auto max-w-2xl leading-relaxed">
              BiteStream is a modern front-end food ordering web application that integrates with Swiggy's live API to provide a seamless dining experience. Our platform allows users to explore a wide range of restaurants, view detailed menus, and place orders directly from their favorite eateries. With a user-friendly interface and real-time updates, BiteStream makes ordering food quick and easy.
            </p>
          </div>

          {/* Location Info with Icon */}
          <div className="mb-6">
            <UserClass location={"Pune, India"} />
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 relative">
              Connect With Me On
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 opacity-20 blur-sm"></span>
            </h3>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a href="https://www.instagram.com/ishanxgujarathi/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl sm:text-4xl text-pink-500 hover:text-pink-600 transition-transform transform hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/ishan-gujarathi-757982204/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl sm:text-4xl text-blue-700 hover:text-blue-800 transition-transform transform hover:scale-110" />
              </a>
              <a href="https://x.com/ixhaan_10" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-3xl sm:text-4xl text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110" />
              </a>
              <a href="https://github.com/ishangujarathi" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-3xl sm:text-4xl text-gray-800 hover:text-gray-900 transition-transform transform hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
