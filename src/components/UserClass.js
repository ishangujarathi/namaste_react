import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }
    };

   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ishangujarathi");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
        console.log(json);
    }

    componentDidUpdate(){
        console.log("Updated the DOM with new data from API call");
    }

    componentWillUnmount(){
        console.log("Unmounted the component");
    }
    render()
    {
        const {name, location} = this.state.userInfo;
        return(
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @ishangujarathi</h4>
            </div>
        );
    }
}

export default UserClass;