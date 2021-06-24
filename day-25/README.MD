[Go to ToC](../README.md)

# Handling Events

## ToC

- [Events Recap](#events-recap)
- [Chrome Dev Tools Demo](#chrome-dev-tools-demo)
- [Events in React](#events-in-react)
- [ ](#)
- [ ](#)
- [](#)
- [](#)

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

[🔝](#toc)

###

[🔝](#toc)

###

[🔝](#toc)

###

[🔝](#toc)

###

[🔝](#toc)
