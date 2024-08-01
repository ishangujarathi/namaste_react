import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }
  render(){
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namste React Web Series</h2>
        <UserClass name={"First"} location= {"Pune class"}/>
      </div>
    );
  }
}

export default About;
