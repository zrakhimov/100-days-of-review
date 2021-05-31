[Go to ToC](../README.md)

# JSX, Elements and Components

## ToC
* [Intoducing JSX](#introducing-jsx)  
* [Variables Inside JSX](#variables-inside-jsx)  
* [ ](#)
* [ ](#)
* [ ](#)
* [](#)
* [](#)

### Introducing JSX

- JSX stands for JavaScript XML
- Looking at this you might be very confused, is it JavaScript or is it HTML?
- People are opinionated regarding the extension that it needs to have. You can write `file.js` or `file.jsx`. You might see both of these out there
- This is not valid javascript, but this needs to be converted to a version which actually can be run.
```js
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

```js

const uppercase = name => name.toUpperCase();

const element = <h1>Hello, { 'User ' + uppercase('zokir')}
```

[🔝](#toc)  
  

  
### 




  
[🔝](#toc)  

### 


  
[🔝](#toc)  

###


  
[🔝](#toc)  

### 



[🔝](#toc)    
  
  
### 


  
[🔝](#toc)  

  
  
  
