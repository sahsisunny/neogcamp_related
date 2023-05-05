# Lesson Five

## Exercise 1

1. Getting started with reactjs

### 1. Getting started with reactjs

#### 1.1. What is ReactJS?

ReactJS is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

#### 1.2. Why ReactJS?

ReactJS is used to build single page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012.

#### 1.3. What are the features of ReactJS?

- ReactJS uses a virtual Document Object Model instead of the real DOM. This will increase apps performance.
- ReactJS uses server-side rendering.
- ReactJS follows uni-directional data flow or data binding.
- ReactJS can be used with other frameworks (Backbone.js) as it is only a view layer.
- ReactJS uses reusable/composable UI components that present data that changes over time.
- ReactJS allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC application, and can be used with other JavaScript libraries or frameworks in the model and controller.

#### 1.4. Steps to create a ReactJS app

- Create a react app using `npx create-react-app my-app`
- `cd my-app` for entering into the app directory
- `npm start` for starting the app
- `npm run build` for building the app for production to the `build` folder.
- `npm test` for running the test watcher in an interactive mode.
- `npm run eject` for removing the single build dependency from your project.
- 

#### 1.5. What is JSX?

JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”. To get a basic introduction to JSX [click here](https://reactjs.org/docs/introducing-jsx.html).

#### 1.6. What is Babel?

Babel is a JavaScript compiler. Use next generation JavaScript, today. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. It allows you to use new syntax, right now, without waiting for browser support. Babel is a compiler for writing next generation JavaScript. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. It allows you to use new syntax, right now, without waiting for browser support.


#### 1.7. What is Webpack?

Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles. Webpack is a module bundler. Webpack takes modules with dependencies and generates static assets representing those modules. Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

#### 1.8. What is a component?

Components are the building blocks of any React app and a typical React app will have many of these. A React component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML. React components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

##### Types of components

- Class components
- Functional components

##### What is a Class component?

Class components are the ones that extend React.Component. They have a render() method that returns HTML. Class components are also called as stateful components. They have a state. They are also called as smart components or container components.

##### What is a Functional component?

Functional components are the ones that are just a plain JavaScript function that accepts props as an argument and returns a React element. Functional components are also called as stateless components. They don’t have a state. They are also called as dumb components or presentational components.

#### 1.9. What is a state?

State is a plain JavaScript object that is used to store the component’s dynamic data. State is mutable unlike props. State is private and fully controlled by the component. State is a plain JavaScript object that is used to store the component’s dynamic data. State is mutable unlike props. State is private and fully controlled by the component.

#### 1.10. What is a props?

Props is a special keyword in React, which stands for properties and is being used for passing data from one component to another. Props data is read-only, which means that data coming from the parent should not be changed by child components. Props are immutable. Props are immutable.

#### 1.11. What is a lifecycle method?

Lifecycle methods are custom functionality that gets executed during the different phases of a component. There are methods available when the component gets created and inserted into the DOM (mounting), when the component updates, and when the component gets unmounted or removed from the DOM. Lifecycle methods are custom functionality that gets executed during the different phases of a component. There are methods available when the component gets created and inserted into the DOM (mounting), when the component updates, and when the component gets unmounted or removed from the DOM.

- Mounting
- Updating
- Unmounting

##### Mounting

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()


##### Updating

An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

##### Unmounting

This method is called when a component is being removed from the DOM:

- componentWillUnmount()

#### 1.12. What is a virtual DOM?

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. This approach enables the declarative API of React. This in turn enables a cleaner programming model, better performance, and easier maintenance. The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. This approach enables the declarative API of React. This in turn enables a cleaner programming model, better performance, and easier maintenance.


