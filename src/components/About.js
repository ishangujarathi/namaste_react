import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent Component Did Mount");
  }
  render(){
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namste React Web Series</h2>
        <UserClass name={"First"} location= {"Pune class"}/>
        <UserClass name={"Second"} location= {"Pune class"}/>
      </div>
    );
  }
}

export default About;
