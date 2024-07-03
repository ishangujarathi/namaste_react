import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const title  = (
    <h1 className="head" tabIndex="5">    
    Namaste React inside JSX🚀
    </h1>)

//React Functional Components -> just normal JS functions which returns some JSX
//Component Composition -> calling a component inside another component

const HeadingComponenet = () => (
    <div id="container">
        {title}
        <h1 className="heading">Namaste React Functional Component🚀</h1>
    </div> 
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponenet/>);
