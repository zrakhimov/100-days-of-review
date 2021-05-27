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
  

## Pre ES6 class

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

## ES6 class

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

## ES6 class with Inheritance

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

  
  
  
