# namaste_react

React.createElement() -> it return a React Element.
React Element is a JS object.
root.render() -> the render function converts the React Element into HTML attribute, that is rendered on the browser.


#Parcel
-Dev Build
-Local Server
-HMR - Hot Module Replacement
-File Watching Algorithm - written in C++
-Caching - for performing faster builds
-Image Optimization
-Minification of files - Parcel is a bundler, will minify our files
-Compressing of files - to make shipping easy into production
-Consistent Hashing
-Code Splitting
-Differential Bundling - to support our web apps on older browsers
-Optimal Error Handling
-Diagnostic of our web app
-Tree Shaking - remove unused code
-Different Dev and Production Bundles


#Within Package.json file, wrote 2 npm scripts
"start" -> to build the project in development mode
command : npm run start / npm start
"build" -> to build the project in production mode
command : npm run build

#JSX -> JavaScript XML
JSX is HTML Like or XML Like Syntax
JSX is totally independent
JSX allows us to write HTML elements within JS code.

JSX is not pure JavaScript, the JS engine does not understand JSX Code.
JS engine understands ES6 Language(pure JS).
Browser will not understand JSX Code, because it is not pure JS code.
The JSX code that is working is beacuse our hero PARCEL is doing the job behind the scenes.
The JSX code, before going to the browser(JS Engine) is transpiled and then the JS engine received the code that the browsers can understand.
Transpiled -> the JSX code is converted to a code which the JS Engine/browser can understand.
Parcel alone does not transpiles the code, Parcel is like a Manager, who manages different packages and it contains one such Package known as BABEL.Babel is a JS Compiler.
It the the job of Babel to convert the JSX code to JS engine code (Transpiling).
The JSX code behind the scenes is converted to React.createElement() only and then it return a React Element and the render() method renders it on the DOM as HTML Element.
Babel is converting the JSX Code into React.createElement() code.

Example:
    JSX Code -> const heading = <h6>Namaste React</h6>
    Code converted by Babel -> const heading = /*#__PURE__#*/React.createElement("h1",null,"Namaste React")

To give attributes inside JSX, we have to follow camelCase syntax.
If we are writing JSX in multiple lines, we need to wrap it inside round braces (), because Babel needs to understand from where JSX is starting and ending.

#React Components
1-Class Based Components -> old way, they use JS Classes to create components.
2-Functional Based Components -> current way, they use JS functions to create components.

While creating any React Component, always we have to use the first letter as Capital, because it is a standard React Way to create Components.

We can render functional components using this sysntax <functional_component_name/>.
We can call another funtional component inside any other functional component, also known as Component Composition.
Inside functional component(inside JSX), we can inject any piece of JS code inside {} braces.
Inside functional components(inside JSX), we can also call React elements inside {} braces.


#Namaste Food Ordering App:

Planning / WireFrame:
Header-> Logo towards the left, Links towards right, Cart
Body-> Search Bar, Search Button, Restaurant Cards -> image of food, rating of food items, cuisine names, price etc
Footer-> Links, Copywrights

Props(Properties) -> passing props to a component is similar to passing arguments to function.
Props helps us to pass dynamic data to components.
We can pass any number of props inside Component, react will wrap all of them as objects and then we can pass them dynamically using {} braces as they are nothing but JS objects!


In Raeat, there are 2 types of import and export:
1-Default Import/Export
export default <component_name>
import <component_name> from "path"

2-Named Import/Export
export const <conponent_name>
import {<component_name>} from "path"

When we have to export multiple things, always use named Exports!

#Getting started with React Hooks!
Everyone says React is Fast, but the actual reason behind it is that React is faster in DOM Manipulation, which makes React fast and optimised. The UI and the Data Layer are always in Sync with eachother due to faster DOM Manipulation, which optimises our web app and improves efficiency and performance which makes our web app faster and hence the fact that React makes our web app faster!

We are trying to filter the newly created list of restaurants using the JS filter method, but on clicking the button we can only see the changes inside the console, but the UI is not getting updated!! The data layer has changed but the same changes haven't yet been reflected onto the UI layer...this is where React comes into the picture and solves the above problem with the help of React HOOKS!! We have to give the list of restaurants, superpowers of React, it wil become a super-energetic varaible of React, as currently it is only a normal JS let variable with few restaurant card objects!

The superpowerful variable thet we wnat our listofrestaurants to create is also called as a State Variable! To create State Variable, we use React Hooks knows as UseState(). React Hooks at the end of the day is nothing but just normal JS utility functions, which is given to us by React, it is a prebuilt function and has some logic written behind it!

2 of the most widely used and importatnt React Hooks->
1) useState() -> used to create superpowerful state variables, alwasys import it like named import {} from "react"
2) useEffect()

useState() -> used to create State Varibles, bcoz it maintains the state of the component
The scope of local state variable created using useState() hook is within that particular component itself.

useState() -> when we call this JS utility function, it returns a state varaible, to store the state variable we store it inside an array:

const [listofrestaurants] = useState(); -> this is how we create a state varaiable in React
The listofrestaurants has now turned into a super powerful state variable.

let listofrestaurants = []; -> this is how we create a empty list of in JS.
const [listofrestaurants] = useStata([]); -> same way of creating in React. Whatever we pass inside the useState() function becomes the default value of our State variable in React.

We can modify the state variable only through a special technique in React.
We pass in a second paramater, basically a function that modifies the state variable. The name of the function would be same with a prefix of "set" + state variable name. (Industry Convention).

The Superpowerful State Variable that we created using React Hook  useState() basically keeps the UI Layer in sync with the Data Layer. As soon as we perform any modifications or changes to the listofrestaurants, it will automatically refresh and reflect the changes into the UI layer!!!.

WHENEVER A STATE VARIABLE UPDATES/CHANGES, REACT RE-RENDERS THE COMPONENT!!!!!

The logic of updating the UI is known as Re-rendering and this is the superpower of React, it performs very fast and optimized Re-Rendering upon changes in the local state variables. It performs very fast DOM manipulation upon changes in state variable through hooks.


#RECONCILIATION ALGORITHM(aka REACT FIBER):
React basically uses this Reconciliation algorithm. This algorithm is also known as REACT FIBER.

Whenever we have any UI, behind the scenes it is DOM object(Tree Like display of components).
Whenever we have the UI, react creats a Virtual DOM of it.
Virtual DOM in not real DOM, it is the representation of an actual DOM. (Actual DOM is the tags n all..).
Virtual DOM is nothing but a React Object at the end of the day.


#DIFF ALGORITHM:
Diff Algorithm basically finds out the difference between 2 virtual DOMs, the previous Virtual DOM and the updated Virtual DOM.
It will calculate the difference and then actually update the DOM on every render cycle!

React can efficiently find out the difference between 2 virtuals DOMs and update the actual the UI -> the core of React's Algorithm!

Why React is fast -> bcoz it has a DIFF Algorithm which can do fast, efficient and optimised DOM Manipulation!

React is constantly keeping an eye on the State Variable, constantly tracking the State Variable created using the useState() React Hook and whenever these state varibles updates, React immediately trigger the diff algorithm, quickly finds out the difference between the 2 virtual DOMs and updates the UI AUTOMAGICALLY!!! It always keeps the UI Layer and the Data Layer in SYNC with eachother, which is the core of React Algorithm!! 

