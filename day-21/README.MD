[Go to ToC](../README.md)

# Re-Introduction to JavaScript

## ToC
* [JavaScript for React](#javascript-for-react)  
* [ ](#)  
* [ ](#)  
* [ ](#)  
* [ ](#)  
* [](#)  
* [](#)  

### JavaScript for React

- There are aspects of JavaScript that React **requires** you to know
- React leans on existing parts of JavaScript where possible instead of inventing new ways of to do things.
- It has a new syntax (JSX for example), but uses a ton of existing JavaScript syntax compared to other frameworks where they fill in gaps by introducing a lot of new syntax, API and frameworks.
- Originally React used JavaScript classes, but going forward we'll use functional components 
- So let's go over some of the JavaScript syntax that React uses a lot, so hopefully by keeping this in mind, it'll be easier to understand the code in React.

[🔝](#toc)  

  

### Pre ES6 class

```js
// constructor
function Polygon (height, width) {
  this.name = 'Polygon';
  this.height = height;
  this.width = width;
}

// method
Polygon.prototype.sayName = function() {
  console.log('Hi', this.name);
}

// usage

let poly = new Polygon(300, 300);
poly.sayName();

```

### ES6 class

```js
class Polygon {
  // constructor
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  
  //method
  sayName() {
   console.log('Hi', this.name );
  }

  
// usage
let poly = new Polygon(300, 300);
poly.sayName();

```

### ES6 class with Inheritance

```js
class Square extends Polygon {
  
  // constructor
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
  // methods (getter and setter)
  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}

// usage 

let s = new Square(5);

s.sayName();
console.log('The area of this square is ' + s.area);

```
https://googlechrome.github.io/samples/classes-es6/ 


### Component Example Using ES6 and Prototype Based Classes

```js
function Component(value) {
  this.value = value;
}

Component.prototype.render = function() {
  return `Hello $(this.value)`;
}

let comp = new Component(1234)
let rendered = comp.render();
```

```js
class Component {
  constructor(value) {
    this.value = value;
  }
  
  render () {
    return `Hello ${this.value)`;
  }
}

let comp = new Component(1234)
let rendered = comp.render();
```

### Functional Pattern
- Why is this relevant? Going forward, we're going to rewrite these class component in a functional pattern.
- If we look at the previous example, we can see there are 3 steps involved in creating and using the component
1) define component with state
2) create an instance of the component
3) render the component so it returns the representation of the state that it has

- In **functional** pattern we can do the following:

```js

function Component(value) {
  return `Hello ${this.value}`
}

let rendered = Component(1234);

```

- What's been done is essentially we've collapsed the class pattern of doing things in a functional way, where the function almost acts like a constructor, and returns a value just like class method. 
- You're going to see these 2 ways of writing components, but React heavily favours the functional pattern.

### Why React ditched OOP 

- problems with `this`

### Arrow functions

```js
// function declaration
function f(a, b) {
  return a + b;
}

// function expression

const g = (a,b) => {
  return a+b;
}

// same as

const g = (a,b) => a + b








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

  
  
  
