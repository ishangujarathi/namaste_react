import React from "react";
import UserClass from "./UserClass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          About Us
        </h1>
        <h2 className="text-5xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          TASTE TREASURES
        </h2>
        <UserClass location={"Pune class"} />
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Follow Me On</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/ishanxgujarathi/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-3xl text-pink-500 hover:text-pink-600 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/ishan-gujarathi-757982204/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-blue-700 hover:text-blue-800 transition-colors" />
            </a>
            <a href="https://x.com/ixhaan_10" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-3xl text-blue-500 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://github.com/ishangujarathi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-3xl text-gray-800 hover:text-gray-900 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
