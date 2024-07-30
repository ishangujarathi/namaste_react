import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us page</h1>
      <h2>This is Namste React Web Series</h2>
      <User name= {"Ishan Gujarathi (functional props)"}/>
      <UserClass name={"Ishan Gujarathi (class based props)"} location= {"Pune class"}/>
    </div>
  );
};

export default About;
