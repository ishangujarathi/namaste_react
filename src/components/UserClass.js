import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default"
      }
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ishangujarathi");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Updated the DOM with new data from API call");
  }

  componentWillUnmount() {
    console.log("Unmounted the component");
  }

  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card p-6 bg-white rounded-lg shadow-lg mt-6 flex items-center space-x-4 max-w-4xl mx-auto">
        {/* Avatar and Info */}
        <div className="flex-shrink-0">
          <img 
            src={this.state.userInfo.avatar_url} 
            alt={name} 
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Developed by: {name}</h2>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 mr-2" />
            <span className="text-xl font-semibold">{location}</span>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" />
            <span className="text-lg font-medium text-gray-600">Contact: ishan.gujarathi10@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-800" />
            <a href="https://github.com/ishangujarathi" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition-colors text-lg ml-2">
              @ishangujarathi
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
