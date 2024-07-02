/*
   <div id="parent">
        <div id="child">
            <h1> I'm a h1 tag </h1>
            <h1> I'm a h2 tag </h2>  to pass this sibling inside a parent, we use [] -> array of children
        </div>

        <div id="child2">
            <h1> I'm a h1 tag </h1>
            <h1> I'm a h2 tag </h2>  to pass this sibling inside a parent, we use [] -> array of children
        </div>

    </div>    
*/
// React.createElement always returns an object (React Element, which is JavaScript object) and at the end of the DynamicsCompressorNode, 
// the render function converts that object into the tag to display on the browser
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
    "div",
    {id:"parent"},
    [ React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"I'm a h1 tag"),React.createElement("h2",{},"I'm a h2 tag")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"I'm a h1 tag"),React.createElement("h2",{},"I'm a h2 tag")]
    )]
)

// const heading = React.createElement("h1",{id:"heading"},"Hello World from react!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);