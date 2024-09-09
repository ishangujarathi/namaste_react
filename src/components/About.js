import React from "react";
import UserClass from "./UserClass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';  
import { faMapMarkerAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';  

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
        {/* About Header */}
        <h1 className="text-3xl font-semibold mb-4 text-gray-900 tracking-tight">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2 text-blue-500" />
          About Us
        </h1>

        {/* Application Name */}
        <h2 className="text-4xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          BiteStream
        </h2>

        {/* Location Info with Icon */}
        <div className="flex justify-center items-center mb-6">
          <div className="flex items-center">
            <UserClass location={"Pune, India"} />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-6 text-gray-800">Connect With Me On</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/ishanxgujarathi/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-3xl text-pink-500 hover:text-pink-600 transition-transform transform hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/ishan-gujarathi-757982204/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-blue-700 hover:text-blue-800 transition-transform transform hover:scale-110" />
            </a>
            <a href="https://x.com/ixhaan_10" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-3xl text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110" />
            </a>
            <a href="https://github.com/ishangujarathi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-3xl text-gray-800 hover:text-gray-900 transition-transform transform hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
