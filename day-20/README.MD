[Go to ToC](../README.md)

# React Introduction

# ToC

- [What is React](##what-is-react)  
- [History](#history)  
- [Difference In Approach](#difference-in-approach)  
- [Components](#components)  
- [Component Example](#example-of-components-on-a-page)

## What is React?

React is the most popular library for **building user interfaces**. Most people refer to it as a framework, and I personally agree with that because of the whole tooling that comes with developing React applications.

At its core, it's really a "JavaScript library for building user interfaces" and it can be added to your site as a library in [one minute](https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute) by just including `<script>` tags

![](assets/Pasted%20image%2020210220144624.png)

* React runs on the client as a SPA (Single Page App), but can be used to build full stack apps by communicating with a server/API (eg. MERN stack)
	> PHP for example runs on the server and serves html files to the client, whereas React app is a single html page and then all the routing etc is javascript which is bundled together loaded by the browser

## History

It was developed and implemented at Facebook around 2010 and was released to the public in 2013. 

Why it was developed? Once the app becomes more sophisticated and feature rich, it needs to offer good performance for the user as well as ease of code maintenance for developers. 

This is where separation of concerns come into play and there was a need for a component based architecture for front end. React is the front-end engine for these, on both browser and mobile devices platforms.

## Difference in approach

As I explained in my previous lessons on the [youtube channel](https://www.youtube.com/channel/UC0OPB0SNWLinS_-a_mxWL0A), we were working directly with the DOM, and changes were made using JavaScript (`document.querySelector`).

As stated earlier, using this approach can get messy once your app becomes bigger and bigger with lots of JavaScript code to maintain. 

The difference is that we won't be working with DOM directly, but our work will affect the rendered DOM.

Usually, as a beginner, you've probaly learned *page-first* approach, where you design apps that are split between pages.

In React, it's different and it uses *app-first* approach where we focus on a single [SPA](https://en.wikipedia.org/wiki/Single-page_application) that are made of *components*.

> In addition, React apps work on iOS and Android by using [ReactNative](https://facebook.github.io/react-native/)

## Components

In React, developers build user interfaces using *components*. A component is just a **JavaScript code container**. It includes markup (JSX) and JavaScript code for logic, state management and communication.

The component is usually responsible for a *area* in the user interface, including rendering and it's interaction with other components. It can hold other components or can be embedded within other components.

## Example of Components on a page

> Online Store  
![](assets/Pasted%20image%2020210220151540.png)  
> Weather App  
![](assets/Pasted%20image%2020210220151602.png)  


## React Boilerplate

To start a react project, we can use the `create-react-app` command line tool. *Make sure you have Node Package Manager installed (npm). *

> We're going to use a command `npx` to create our react template. `npm` is a package installer, but if we want to execute that package (for example `create-react-app` package) we'd have to install it either globally, or by going into it's local directory, which might be complicated. However by using `npx` (x for execution), it simply lets us execute that package without having to worry about uninstalling it later.

1. In your comman line, `cd` into a desired location and type: 

```
npx create-react-app my-app
```

This will create a new folder called `my-app`, with the code needed to get started.

![](assets/Pasted%20image%2020210220160028.png)


2. As suggested, `cd` into the newly created project and type 

```
npm start
```

This should open up the initial app in the browser located at `localhost:3000`

![](assets/Pasted%20image%2020210220161731.png)


## What is inside the project?

![](assets/Pasted%20image%2020210220160316.png)

- `node_modules` - includes all the code / packages that is used  during development, packaging and deployment phases.
- `public` - includes the root of the app, `index.html`. Other assets can be added that is needed by this file, like favicons or logos etc.
	- `index.html` - Notice how the whole html just contains one `div` element. When it's ready for production, the build process will replace this with components in the app.
	 ![](assets/Pasted%20image%2020210220161230.png)
- `src` - includes all of the source code for the app. This is where you as a developer will be building components.
	- `App.js` - This is the only high level component that is present. You can view its source file and notice that whatever you see on the browser is coming from here. You can try to change "Learn React" to something else, once you save, the page will reload and shows the change.
	   ![](assets/Pasted%20image%2020210220163003.png)
   - `index.js` - This code is responsible for rendering our "App" component (in [Strict Mode](https://reactjs.org/docs/strict-mode.html)) within `index.html > div id="root"`
  	 	![](assets/Pasted%20image%2020210220163256.png)
- `package.json` -  this file keeps track of the packages and configurations that the app requires. It's needed by the npm
- `README.MD` - basic readme file to include any wiki about your project. Once you push it to GitHub, it'll be visible right away for people to learn about your app when they visit your repo.



## Intro to React Components

As stated in the previous post, applications developed by using React focuses on **components**.  We've seen `App` component which comes in a boilerplate.

![](assets/Pasted%20image%2020210220185150.png)

* This component is known as a [functional component](https://reactjs.org/docs/components-and-props.html#function-and-class-components), since it's defined as a *function*. 

	The name of the component is used as a tag when rendering this component. When you look at index.js, you can see how the component is rendered. Notice the tag, it's *self-closing* tag. Most of the time, self-closing tags are used to render a component, except when you wish to write the component as a wrapper. When used as a wrapper, you can use `<App></App>` and include other components within these tags.

	![](assets/Pasted%20image%2020210220185512.png)


* There are 4 other lines outside the functional component within `App.js`
	* `import React from 'react'` - Needed for JSX code, but not necessary from React version 17
	* `import logo from './logo.svg'` - cool "React" logo svg code
	* `import '/App.css'` - includes styling for the component
	* `export default App` - This is required becuase our component exists as a separate `js` file (module) and we need to import it in `index.js` (See [ES6 module syntax](https://exploringjs.com/es6/ch_modules.html)). 
		![](assets/Pasted%20image%2020210220190519.png)

## Creating component called `Hello`

Let's create a component called `Hello`. It's sole purpose would be to display `Hello World` as a paragraph. 

1. In `src` folder create a new file called `Hello.js`
2. Inside `Hello.js` add imports and exports

	![](assets/Pasted%20image%2020210220203232.png)

3. To create a component, simply create a function that returns JSX.
	
	![](assets/Pasted%20image%2020210220203549.png)
	
4. Next, we need render it somewhere to see it in the browser. Let's actually just include as a component inside `App` component. Go to App.js and add `Hello` component below "Learn React" link. First you'd need to import Hello into App module:
	
	![](assets/Pasted%20image%2020210220213507.png)
	
5. You should now see our component rendered on the browser `localhost:3000`:
	![](assets/Pasted%20image%2020210221094805.png)
	
### Functional and Class Components

There are 2 ways of creating a React Component. Class and Functional:

They both have their advantages and disadvantages
In our "Hello" component example we've used functional component. However same can be written using `class` component


```javascript
	// Functional
	function Hello() {
		return (
			<p>Hello World</p>
		)
	}
	
	
	// Class
	class Hello extends React.Component {
		render() {
			return <p>Hello World</p>
		}
	}
	
	
	
```

In React, there's a concept of "State" where we'll talk about in later posts, which was only available in `class` implementation of the components. However starting React version 16, the team introduced **React Hooks** which enable class components to have "State" as well. 

Going forward, we'll only focus on the functional components and "hooks" rather than OOP related `class` components.

	
	
## What is JSX?

Have you seen the strange syntax that the component returns? It's called JSX (JavaScript XML), and makes it easier to write HTML in React. 

Instead of using DOM methods to create an element like `createElement()` or `appendChild()`, you can use JSX which will be translated into javascript at runtime.  	For example, these are the same:

```javascript
const element = (
  <p className="greeting">
    Hello, world!
  </p>
);
```

and 

```javascript
const element = React.createElement(
  'p',
  {className: 'greeting'},
  'Hello, world!'
);
```

> Always use self-closing tags, becase in JSX there's no such thing as empty element `<br` -> `<br />`	

### Expressions in JSX

Just like [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) in javascript, where you can insert any expressions inside `${ }`, you can do the same within JSX, by using **curly braces** `{}`

![](assets/Pasted%20image%2020210221100143.png)

or 

![](assets/Pasted%20image%2020210221100446.png)

	
### JSX in as an expression

Since JSX becomes regular JavaScript at runtime, you can treat it as an expression too. This will enable you to use it in `if` statements, assign it to `variables`, accept it as `arguments` and `return` from functions.

![](assets/Pasted%20image%2020210221101001.png)


### Attributes in JSX

JSX is closer to JavaScript than HTML, so ReactDOM uses *camelCase* property naming convention instead of HTML attribute names

For example, class becomes [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) in JSX, and tabindex becomes [tabIndex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).
```jsx
<div tabIndex={-1} />      // Just like node.tabIndex DOM API
<div className="Button" /> // Just like node.className DOM API
<input readOnly={true} />  // Just like node.readOnly DOM API
```


### Accepting "Props"

"Props" are short for properties. Essentially components are just like JavaScript functions: they can accept inputs from the caller, do something with them or return them to the caller in the format specified within the component.

`App.js`
![](assets/Pasted%20image%2020210227195617.png)

`Hello.js`
![](assets/Pasted%20image%2020210227195706.png)

`Output`
![](assets/Pasted%20image%2020210227195727.png)

## React Hooks

As mentioned earlier, in October 2018, starting React v.16.8, the team introduced a new feature called "Hooks", which enables **functional components** to do *side effects* and have *state* among other things.

These "hooks" are `useEffect()` and `useState()` functions. Let's see a `Clock` component which demonstrate examples using hooks.

### Clock component
1) Let's create a new component called `Clock` which recieves a date as a prop
2) It's sole purpose is to output the current time (toLocaleTimeString()) within `h2` tags
3) Import this component into our main `App` component and give it a prop called `date` by creating a Date object.

![](assets/Pasted%20image%2020210227201023.png)

The problem with this, is that it doesn't keep a **state**. That's why in order to update our time, we need to refresh the page.

### Clock component with Hooks

State of a component is a way to store data in a component that is synchronized with the UI. Whenever there's a change in the state, UI gets updated with the latest changes. 

We'll need to do 2 things:
- Keep internal state of the current date with `useState()` hook
- Update our internal state using `useEffect()` hook

#### `useState()`

- Make sure you import useState() and useEffect() from react library
- Using "array destructuring", we're creating a variable for state ( `const date`) and a function to update this variable (`const setDate`)
- We're setting these 2 with `useState()` function
- `useState()` can accept an argument which will be the initial value for the state variable. In this case we're giving it a date object

![](assets/Pasted%20image%2020210228101442.png)


> Why we're using `const` for the variables? Because we shouldn't be able to change it within the scope of our component, but only use `setDate` to update it. By using setDate we're also re-rendering the component 


We have the internal state and rendering the value from internal state. However are not updating the value, and if you look at the output, the clock doesn't actually update.

To update the clock every second, we need to implement `setInterval`

![](assets/Pasted%20image%2020210228103910.png)

But this implementation is wrong. It updates the component every second, but if you look at how many times the component is rendering, it's out of control.

![](assets/Pasted%20image%2020210228104226.png)

In this case we only want to execute the "side-effect" **once**. To achieve that we use a lifecycle method (hook) `useEffect()` with an empty `[]` for the 2nd argument.
> UseEffect accepts 2 arguments
> First one is a callback function which executes when state changes
> Second one is optional argument which accepts  a list of state variables to watch out for. Sometimes we just want the side-effect to execute when a particular state has been changed.

Let's change our code:


![](assets/Pasted%20image%2020210228105804.png)


Now everything for the Clock component is implemented, you can see the result on the browser that it's updating every second. You can also use this component anywhere and it will function everywhere since it's managing it's own state.
