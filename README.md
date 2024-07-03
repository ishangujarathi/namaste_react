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




