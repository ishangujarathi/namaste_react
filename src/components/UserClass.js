import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
    })
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
      <div className="user-card p-6 bg-white rounded-lg shadow-md mt-6">
        <h2 className="text-2xl font-bold mb-2">Developed by: {name}</h2>
        <h3 className="text-xl font-semibold mb-2">Location: {location}</h3>
        <h4 className="text-lg font-medium text-gray-600">Contact: @ishangujarathi</h4>
        <div className="mt-4">
          <a href="https://github.com/ishangujarathi" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition-colors">
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </a>
        </div>
      </div>
    );
  }
}

export default UserClass;
