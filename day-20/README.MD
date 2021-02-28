[Go to ToC](../README.md)

# React Introduction

## ToC
* [](#)
* [ ](#)
* [ ](#)
* [ ](#)
* [ ](#)
* [](#)
* [](#)

## Introduction

React is the most popular library for **building user interfaces**. Most people refer to it as a framework, and I personally agree with that because of the whole tooling that comes with developing React applications.

At its core, it's really a "JavaScript library for building user interfaces" and it can be added to your site as a library in [one minute](https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute) by just including `<script>` tags

![[Pasted image 20210220144624.png]]


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
![[Pasted image 20210220151540.png]]
> Weather App
![[Pasted image 20210220151602.png]]


## React Boilerplate

To start a react project, we can use the `create-react-app` command line tool. *Make sure you have Node Package Manager installed (npm). *

> We're going to use a command `npx` to create our react template. `npm` is a package installer, but if we want to execute that package (for example `create-react-app` package) we'd have to install it either globally, or by going into it's local directory, which might be complicated. However by using `npx` (x for execution), it simply lets us execute that package without having to worry about uninstalling it later.

1. In your comman line, `cd` into a desired location and type: 

```
npx create-react-app my-app
```

This will create a new folder called `my-app`, with the code needed to get started.

![[Pasted image 20210220160028.png]]


2. As suggested, `cd` into the newly created project and type 

```
npm start
```

This should open up the initial app in the browser located at `localhost:3000`

![[Pasted image 20210220161731.png]]


## What is inside the project?

![[Pasted image 20210220160316.png]]

- `node_modules` - includes all the code / packages that is used  during development, packaging and deployment phases.
- `public` - includes the root of the app, `index.html`. Other assets can be added that is needed by this file, like favicons or logos etc.
	- `index.html` - Notice how the whole html just contains one `div` element. When it's ready for production, the build process will replace this with components in the app.
	 ![[Pasted image 20210220161230.png]]
- `src` - includes all of the source code for the app. This is where you as a developer will be building components.
	- `App.js` - This is the only high level component that is present. You can view its source file and notice that whatever you see on the browser is coming from here. You can try to change "Learn React" to something else, once you save, the page will reload and shows the change.
	   ![[Pasted image 20210220163003.png]]
   - `index.js` - This code is responsible for rendering our "App" component (in [Strict Mode](https://reactjs.org/docs/strict-mode.html)) within `index.html > div id="root"`
  	 	![[Pasted image 20210220163256.png]]
- `package.json` -  this file keeps track of the packages and configurations that the app requires. It's needed by the npm
- `README.MD` - basic readme file to include any wiki about your project. Once you push it to GitHub, it'll be visible right away for people to learn about your app when they visit your repo.



