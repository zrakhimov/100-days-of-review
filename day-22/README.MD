[Go to ToC](../README.md)

# JSX, Elements and Components

## ToC
* [Intoducing JSX](#introducing-jsx)  
* [Variables Inside JSX](#variables-inside-jsx)  
* [JSX in Multiple Lines](#jsx-in-multiple-lines)
* [Attributes in JSX](#attributes-in-jsx)
* [Props](#props)
* [Components](#components)

### Introducing JSX

- JSX stands for JavaScript XML
- Looking at this you might be very confused, is it JavaScript or is it HTML?
- People are opinionated regarding the extension that it needs to have. You can write `file.js` or `file.jsx`. You might see both of these out there
- This is not valid javascript, but this needs to be converted to a version which actually can be run.
```jsx
// JSX
const element = <h1>Hello, world</h1>;
// JavaScript
const element = React.createElement(`h1`, `Hello, world!`);

console.log(element);

```

- To convert from JSX syntax to JavaScript code, you'd need something called a **transpiler**.

- React uses Babel to transpile JSX code inside React into JavaScript
- [DEMO BABEL]


[🔝](#toc)  
  

### Variables Inside JSX

- It is possible to use JavaScript inside JSX expression. You'd have to use `{}` (single braces)

- Insdie the `{}` you'd put JavaScript expression. It could be as simple as `1+1` inside

```jsx

const uppercase = name => name.toUpperCase();

const element = <h1>Hello, { 'User ' + uppercase('zokir')}
```

[🔝](#toc)  
  


### JSX In Multiple Lines

- You can use JSX anywhere in places of an JavaScript expression

```jsx
if (x == 1) 
    return <h1> Value is 1 </h1>
else
    return <h2> Value is something else!</h2>
```

- When you have JSX expression with multiple lines, just like in html structure, you'd have to wrap them in `()` paranthesis.

```jsx
const element = (
    <div>
        <h1>...</h1>
    </div>
)
```

- :warning: JSX Expression has to be **one** react element. For example you can't do this:

```jsx
const list = (
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
)
```
- You have to wrap it in an element, in this case maybe `<ul>`
```jsx
const list = (
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
)
```
  
[🔝](#toc)  

### Attributes in JSX

- `class` attribute is `className` in JSX
- Be careful on naming the attributes, it's a **camelCase** in JSX

```jsx
const reactElement = <p id="intro" tabIndex="3" className="" onClick=""></p>
```
- We can include dynamic attribute values
- When we dont' have content, we'd have to put `/` to close the tag: `<img></img>` and `<img src={url} />`
- Some people also use `{}` to put static values like `width={250}`, which is totally ok.
```jsx
const url = 'https://cats.com/image.jpg' 
const img = <img src={ url } width={250} height="250" />
```
  
[🔝](#toc)  

### Props

- Consider this Component which creates a React Element

```jsx
function Hello() {
    return <p>Hello</p>
}
```
- It's not that useful, because it doesn't let's us pass any data to it. So React has introduced the concept of **props** (which is short for **properties**)
- So props are data which changes the outcome of the element. (Data -> function component -> React Element)
- Basically you're modelling how your interface looks based on the data that has been passed
- Prop is object
```jsx
// inside component
function Hello(props) {
    const name = props.name
    return <p> Hello {name}</p>
}

// usage
<Hello name={'Zokir'}/>

```
  
[🔝](#toc)  

### Component

- Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
- Components can include other components.
- Notice how the data is flowing through parent-child components (one-way dataflow)
- If the data ever changes, React is very efficient making adjustments to the DOM and updating all the cascading components right away.
 

```jsx
// inside component
function Person({name}) {
    return (
        <div>
            <Hello name={name} />
        </div>
    )
}


// usage
<Person name={'Zokir'} />


```

