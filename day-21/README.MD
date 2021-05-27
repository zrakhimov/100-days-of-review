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


```


### Destructuring

```js
let user = {
  id: 1234,
  fname: 'Dave',
  lname: 'Humphrey'
};


const fname = user.fname
const {fname} = user;
const {email = 'default@google.com'} = user;
```

```js

let coord = [43.7955, -79.345];

let lat = coord[0];
let lng = coord[1];

let [lat,lng] = coord;

```

```js

// 1
function h(options) {
  const id = options.id;
  const name = options.name;
  const isAdmin = options.isAdmin;
  
  console.log(id,name,isAdmin)
}

// 2
function h(options) {
  // const id = options.id;
  // const name = options.name;
  // const isAdmin = options.isAdmin;
  
  const {id,name,isAdmin} = options;
  
  console.log(id,name,isAdmin)
}

// 3
function h({id, name, isAdmin})



let options = { 
  id:8,
  name: 'foo',
  isAdmin: true
}
h(options);

```

### Immutable Data and Cloning

- `string`s are immutable, meaning once you create them, you can't change it

```js
let s =  'Hello World!';
// You might think doing this will change it
s = s + '.';

// But the above actually overwrote the original `s`
```

- Why is this relevant to React? So in React we're going to create *new* instances instead of updating old instances.

For example:

```js

// let's assume we have an object
let user = {
  id: 7,
  name: 'zokir'
};

// we could change any value of the object by reaching into it and changing it

user.name = 'Zokir Rakhimov'

// The problem React has with this, that it is very interested when the data changes and wants to manage it. So it is preferred to replace the whole object when it's changed. So one of the things you see might see is this "replacement" of the state/object

// Take all the values from `user`, create new `user` object and copy all the values from the old `user` object
// Also called cloning an object
user = {...user}
```

- We can do the same cloning for arrays

```js

let list = [1,2,3,4];
let copy = [...list];

// copy with additional items

let copy = [0, ...list, 5] // 0 , 1, 2, 3, 4, 5


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

  
  
  
