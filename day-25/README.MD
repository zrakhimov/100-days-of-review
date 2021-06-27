[Go to ToC](../README.md)

# Handling Events

## ToC

- [Events Recap](#events-recap)
- [Chrome Dev Tools Demo](#chrome-dev-tools-demo)
- [Events in React](#events-in-react)
- [`ClickCounter` and `ClickHeading` Component ](#clickcounter-and-clickheading-component)
- [Conditional Rendering](#conditional-rendering)

### Events Recap

- As we've covered [previously](https://github.com/zrakhimov/100-days-of-review/blob/master/day-17/README.MD#events) there are different types of events we can listen for in the DOM. Here's the list of common ones:

* [`load`](https://developer.mozilla.org/en-US/docs/Web/Events/load) - fired when a resource has finished loading (e.g., a `window`, `img`)
* [`beforeunload`](https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload) - fired just before the window is about to be unloaded (closed)
* [`focus`](https://developer.mozilla.org/en-US/docs/Web/Events/focus) - when the element receives focus (cursor input)
* [`blur`](https://developer.mozilla.org/en-US/docs/Web/Events/blur) - when the element loses focus
* [`click`](https://developer.mozilla.org/en-US/docs/Web/Events/click) - when the user single clicks on an element
* [`dblclick`](https://developer.mozilla.org/en-US/docs/Web/Events/dblclick) - when the user double clicks on an element
* [`contextmenu`](https://developer.mozilla.org/en-US/docs/Web/Events/contextmenu) - when the right mouse button is clicked
* [`keypress`](https://developer.mozilla.org/en-US/docs/Web/Events/keypress) - when a key is pressed on the keyboard
* [`change`](https://developer.mozilla.org/en-US/docs/Web/Events/change) - when the content of an element changes (e.g., an input element in a form)
* [`mouseout`](https://developer.mozilla.org/en-US/docs/Web/Events/mouseout) - when the user moves the mouse outside the element
* [`mouseover`](https://developer.mozilla.org/en-US/docs/Web/Events/mouseover) - when the user moves the mouse over top of the element
* [`resize`](https://developer.mozilla.org/en-US/docs/Web/Events/resize) - when the element is resized

[🔝](#toc)

### Chrome Dev Tools Demo

- An event has a name, for example `click` event. (list above).
- We can get to these events by a number of ways:

#### 1st

```js
// This is essentially a hook to hang a function when this event happens.
document.body.onclick = (e) => console.log("click", e);
```

- So how do we get rid of the event. In this example we simply make it `null`

```js
document.body.onclick = null;
```

#### 2nd

- Using `addEventListener`

```js
document.body.addEventListener("click", (e) => console.log(e));
```

#### 3rd

- We can attach to an element inline

```html
<body onclick="clickHandler()">
  ...
</body>
```

#### `event` object

The event object that we get back has methods on it we can use.

```js
(e) => console.log(`x: ${e.clientX} y: ${e.clientY}`);
```

[🔝](#toc)

### Events in React

- As mentioned before, React works with Virtual DOM and when we apply events, **we apply events against virtual DOM** and React will decide how/when to render the element
- React uses **one-way** data-flow and we call them props.
- We'll see in the examples that **parents will define event-handling functions** and pass them down to child components as props

[🔝](#toc)

### Counting Button

- Let's look at an example of creating a button which counts how many times it's been clicked

```jsx
import {useState} from 'react;

function App() {
  const [numClicks, setNumClicks] = useState(0);

  return <button>Clicks: {numClicks}</button>
}

export default App()

```

- This will render a button on the page with 0 and when clicked it doesn't really do much and nothing happens.
- We have to add an event handler so when clicked, it will increase the value in the `numClicks`
- The way to do it is to use `onClick` attribute name just like we use `on` attribute in html, but since it's JSX, we have to get used to using `onClick`
- Now we need to give this attribute a function that executes when the button is clicked. Since we just want to add 1 everytime it's clicked, we should define a function that does that.

```jsx
import {useState} from 'react;

function App() {
  const [numClicks, setNumClicks] = useState(0);

  return <button onClick={(e) => setNumClicks(numClicks + 1)}>Clicks: {numClicks}</button>
}

export default App()
```

- We also could break it out as a separate handler function:

```jsx
import {useState} from 'react;

function App() {
  const [numClicks, setNumClicks] = useState(0);
  const onClickHandler = (e) => setNumClicks(numClicks + 1)
  return <button onClick={onClickHandler}>Clicks: {numClicks}</button>
}

export default App()
```

- So the style above is how we do it in React
- When the state changes, as usual React will re-render the component. It's like there's a loop in the background that constantly runs and picks up changes to the state and React manages updating the DOM accordingly
- You can view the `state` and the element from Dev Tools how it's changing.

[🔝](#toc)

### `ClickCounter` and `ClickHeading` Component

- So far we've looked everything as a one component. Let's just copy this and create it as a separate component that manages counting event.
- Also create another component that uses the number of clicks in the heading
- Think about the state, where we should put it? Also think about the problems we're going to have if we put it in the `Click` components.
- We want to be able to pass the state to both components, and whenever the data changes in one of the component, I want to be able to update it in the other component.
- The way we're able to share data between multiple components is to **move the data to the parent** and pass it down **as props**

```jsx
// ClickCounter.js

function ClickCounter({numClicks}) {
  return <button>Count: {numClicks}</button>;
}

export default ClickCounter;

// ClickHeading.js

function ClickHeading({numClicks}) {
  return <h1>Tugma {numClicks} marta bosildi!</h1>;
}

export default ClickHeading;

// App.js

import ClickCounter from "./ClickCounter";
import ClickHeading from "./ClickHeading";

const [numClicks, setNumClicks] = useState(0);
const onClickHandler = (e) => setNumClicks(numClicks + 1)]

return (
  <div>
    <ClickHeading numClicks={numClicks}/>
    <ClickCounter numClicks={numClicks}/>
  </div>
)
```

- Now the data in both components updates simultaneously.
- Now let's implement what happends when the button is clicked. So we pass the handler to the `ClickCounter` component as props and wire it to button's onChange attribute.

```jsx
// ClickCounter.js

function ClickCounter({numClicks, onClick}) {
  return <button onClick={onClick}>Count: {numClicks}</button>;
}

export default ClickCounter;



// App.js

import ClickCounter from "./ClickCounter";
import ClickHeading from "./ClickHeading";

const [numClicks, setNumClicks] = useState(0);
const onClickHandler = (e) => setNumClicks(numClicks + 1)]

return (
  <div>
    <ClickHeading numClicks={numClicks} />
    <ClickCounter numClicks={numClicks} onClick={onClickHandler}/>
  </div>
)
```

[🔝](#toc)

### Conditional Rendering

- Right now in our `CounterHeading` component, it simply display an `<h1>` tag. Let's modify it a little so when the the number of clicks is `0` then it displays nothing.

```jsx
// ClickHeading.js

function ClickHeading({ numClicks }) {
  if (!numberOfClicks === 0) {
    return null;
  }

  return <h1>Tugma {numClicks} marta bosildi!</h1>;
}

export default ClickHeading;
```

- We also can modify it so when the number of clicks is 1, instead of the number, show it in written form. For example.

```jsx
// ClickHeading.js

function ClickHeading({ numClicks }) {
  if (!numberOfClicks === 0) {
    return null;
  }

  return <h1>Tugma {numClicks === 1 ? "bir" : numClicks} marta bosildi!</h1>;
}

export default ClickHeading;
```

[🔝](#toc)
