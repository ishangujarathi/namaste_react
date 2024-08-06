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


#Exploring the World

1) MONOLITHIC ARCHITECTURE -> Traditionally earlier, all web apps were developed using monolithic architecture. Earlier we used to have one huge big project. The project itself had all the codes inside itself like the APIs, UI, Backend, DB Connectivity, Authorization etc.

2) MICROSERVICE ARCHITECTURE -> In today's world, all big tech companies are moving and leveraging towards Monolithic architecture. In Microservices Architecture, we have different services for different jobs, like we have API Service, Backend Service, DB Service, Frontend Service, Auth Service etc and all these small and microservices together form one big application. This is also known as Separation of Concerns and Single Responsibility Principle(SRP), where each individual service has it's own job and application. These individual services talk with eachother like Frontend with Backend to fetch requested data, Backend service with DB to fetch the data etc.

For ex - The Namaste React Project that we are making is a UI Microservice. It is developed in React.One more advantage of Microservices is that we can have different tech-stack for different services. 

All the above services are deployed(run) on their specific ports. Like for ex- currently our Namaste React Project is running on port :1234. On differnet ports, we can deploy different services. At the end of the day, all these services can be mapped to domain name. Like for ex- we can map and deploy all APIs to /api domain name, all SMS to /sms domain name etc.


#2 Approaches about how UI or web applications fetch the data from Backend:

1) As soon as our web app loads, we can just make an API call to fetch the data and then render the UI on the page.

2) As soon as the web page loads, we can render the UI, and after that we will make an API call and then again we will re-render our application with new data.

In React, we will always be using the 2nd Approach, because it give better UX(User Experience). Even though we are rendering twice, it doesn't matter cuz React has very fast render cycles!! It has the best Rendering mechanism and renders our UI very fast!

#Introduction to useEffect() React Hook:

In useEffect() function, we will always pass 2 arguments, first is the Arrow Function(which is a callback function) and second is the dependency array.
ex- useEffect(()=>{},[]); The callback function will be called, after our component renders! When the Body Component will render and as soon as the render cycle is finised, it will call the useEffect() callback function.

#TRICKY QUESTION:
const Body()
{
useEffect(()=>{
    console.log("Ishan");
},[]);

console.log("Gujarathi");
}

O/P -> The console will first log Gujarathi and then Ishan, because the useEffect() callback function is called after the Component is rendered fully!!!


We require the useEffect() hook to make an API call after the componet is rendered, as dicuseed in approach 2.


Some Important points about useEffect() React Hook and useState() React Hook:

1) useEffect() React Hook consists of 2 parameters, first is the CallBack Function and second is the dependency array. (dependency array is optional parameter);

2) useEffect() React Hook is called after our web page is rendered.

3) If we do not specify the dependency array, our useEffect() React Hook will be called everytime we render our component. useEffect(()=>{});

4) If we pass an empty dependency array, our useEffect() React Hook will only be called once intially when our component renders. useEffect(()=>{},[]);

5) If we pass anything into the dependency array, then the useEffect() React Hook will be called upon changes into the passed dependency.

6) Always create/declare useState() and create state variables inside the component, never create them outside as it will throw some error.

7) Always create/declare useState() at the top of functional component.

8) Never create/declare useState() inside any loops(if,for etc).


#Introduction to React Routers:

Firstly we installed a package npm i react-router-dom
Whenever we have developed routes, we have to develop routing configurations.

The createBrowserRouter Configurations takes an array of lists(objects), where we pass path: "" and the element: "<component_name/>" to render if we pass the specified path in URL. Each object determines the different paths and what should happend on that path. 

After creating the configurations, we have to provide the configurations to Render it. React-Router-dom provides use with another component knows as Routerprovider, which helps us to provide the configurations created to our webapp (app.js).

Children Routers -> When we want our Header,Footer to stay intact across all of our web pages, we use Childern Routing Concept. React-Router dom provides us with Outlet component. We have to specify children, which is again a list of paths, where again each path is object representing the path and element to render based upon the path specified. The path gets replaced with Outlet component, based upon path specified.

Link to -> Another Component provided by react-router-dom which helps us to give links (similar to <a href=""> ... </a> tag), which is used to link pages. Special feature it provides is that it does not reloads the web page, which leads to optimization of our web app.

Link to just refreshes the component, instead of reloading the entire page. That is why React is also knows as Single Page Aplication. Our web app is a single big component and routing just refreshes new components and does not load entire web page. The components are interchangable, that is whenever we have to navigate we can easily do without loading entire page.

Link behind the scenes is <a href="">...</a> (anchor) tag only. Link basically wraps te anchor tag. React-Router dom will enable that it is a Link and it will not reload the entire web page just replace components!

#Types of Routing:

1) Server Side Routing - Server-side routing manages routing and navigation on the server. When a user requests a different URL, the server generates and sends a new HTML page for that route. Network calls are associated and the data/component is fetched from the server and rendered as HTML on the client side(browser).

2) Client Side Routing - In client-side routing, routing and navigation are managed on the client side, typically within the web browser. Client-side Routing is suitable for Single Page Application. Different components developed are interchangebale/refreshed via Routing, without requirng any network calls.

#Introduction to Class Based Components

-Developing Components using Class Bases technique is an older way.
-As Functional Components in React are nothing but normal JS Components which return some JSX code, Class Based Components in React are also normal JS Class.
-To develop a Class based component, we have to extend it from React.Components and we have a Render method like render(), which returns some piece of JSX code, which is rendered on the browser.
ex class <component_name> extends React.Component{
    render(){
        return <JSX_Code>
    }
}

Class Based Component is a Normal JS Class, which has a render method, which returns some piece of JSX code.

Loading a class based component on the webpage is basically creating an instance of that class. Whenever we create an instance of any class, the constructor method is called. So in class based components, it is best to pass the props and create state variables inside the constructor method.

constructor(){
    super();

    this.state = {

    };
};

The this.state{} is a big object, that will contain all possible state variables.
To update the state variables in class based components, first of all NEVER UPDATE STATE VARAIBLES DIRECTLY.
To update state variables, React provides us with a special function this.setState(). The function can be used anywhere inside the class. Inside the function, we will pass in an object, which will contain an updated value of our state variables.
Everytime the state varaibles gets updated, React will re-render the entire component.


#LIFECYCLE OF REACT CLASS-BASED COMPONENT / HOW IS THE CLASS BASED COMPONENT MOUNTED/LOADED ONTO THE WEBPAGE

Class Based Components have very important methods -> constructor(), render(), componentDidMount().
Firstly upon rendering of the class based component, instance of that class is created and the constructor() method is invoked. After that, the render() method is invoked and it renders the piece of JSX code wrapped inside it. If we have are invoking any other class based component inside the render method, there will be similar trigger of the child class based component, where again the child class based component will start rendering and instance of that class will be created and the child class constructor() method will be invoked, followed by the render() method of the child class.

When the component is loaded/invoked/rendered, firstly the constructor() method is invoked, then the render() method and once the class based component is mounted onto the DOM, then the componentDidMount() method is called. 

After the render() method of the child class compoent is rendered fully, and the child class component is mounted/loaded onto the DOM, the child componentDidMount() method is called and after that only the Parent componentDidMount() method will be called.

ex: Flow of Execution of methods:
Parent construtor()
Parent render()
Child construtor()
Child render()
Child componentDidMount()
Parent componentDidMount()

The main and the biggest purpose of componentDidMount() method is basically to make an API call, because onece the component is mounted onto the DOM, then only the componentDidMount() will be called.



#Diving Deep into the Lifecycle of React Class Based Component

1) MOUNTING CYCLE/PHASE -> Firstly constructor(dummy) method is called, which updates the set variables with dummy data. Then the render(dummy) method is called, which renders the component with the dummy data passed in. The component is loaded on web page with dummy data for few milli seconds. After that componentDidMount() method is called, which makes an API call. After the API call, we use the this.setstate() method, to update the state variable which contains dummy data initially, with the new data fetched from the API call to the particular endpoint. This marks the finish of our MOUNTING CYCLE/PHASE.

2) UPDATE CYCLE/PHASE -> The setstate() method was called, which triggers the React reconciliation cycle and the Update method begins and again the render() method will be called with the data fetched from the API call. React updates the DOM, i.e the HTML is loaded onto the browser with updated data from the API call. Lastly it will call the componentDidUpdate() method.


3) UNMOUNTING CYCLE/PHASE -> When the component will disappear from the web page, that is if we switch to another tab, the componentWillUnmount() method will be called just before unmounting of component.




#Optimizing our App:

Single Responsibility Principle(SRP) -> Every Component in React should only have a single responsibility or a single functionality. If our component is handling multiple functionalities, we can break/abstract them into multiple components using Custom Hooks Concept so that every component focusess on only a Single Resposibility/Functionality. It is a very important and mandatory System Design Principle.

Custom Hooks -> In React, similar to the Hooks which are provided to us by React, we have develop our own Custom Hooks. React Hooks at the end of the day are just Normal JS Functions which has some speciality, provided to us by React (Special JS Functions). In a very similar way, we can develop our own Custom Hooks. The advantage is that our code would be more optimized, modular and components will be lightweight and moreover, they will have Single Responsibility only.

Parcel, basically is knows as Bundler, which bundles all our js files into a single js file, that is loaded onto the browser. But if there are 1000s of components, the size of the file will be very large and it will take hell lot of time for loading onto the browser. To overcome this issue, while building large scale web applications, break down our app into smaller, modular pieces. Basically instead of one huge JS file, it should be smaller JS files. We will try to make smaaller bundles of thus file. This process is known as Chunking/Code Splitting/Dynamic Bundling/Lazy Loading.

We can obtain such functionality of Code Splitting using the lazy() function, importing as named import from react packgae. Inside lazy() function, we have an import() method and argument it takes is the path of the component that we want to have lazy loaded or on demand loading.

Suspense() -> Suspense can be used to handle the loading of asynchronous data,
such as data from an API. It provides a way to specify a fallback UI (e.g., a loading
spinner or a message) that is displayed while the data is being fetched. This is
especially useful for making our application more user-friendly and responsive.

Tailwind CSS -> Advanced technique of styling our webapp, which has inbuit classes, components, icons etc everything for styling our web apps.

#Introduction to Higher Order Components in React:

Higher Order Component is a function that takes a component and returns a component. It takes the component as input, enhances that component and returns it back.

Important part of any React application is basically to manage it's Data. All React applications have 2 Layer -> UI Layer and Data Layer. The UI Layer is always powered, governed by the Data Layer, also known as Config Driven UI. Data Layer consists of all props, states, local variables etc. Hence it is important to manage the data of the data layer for optimal performance of UI layer and web apps.The UI layer consists of the JSX Code.

Accordian -> It is a UI type, where we can expand and collapse it. It has 2 types, Accordian Body and Accordian Data.