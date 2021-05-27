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
  this.height = height;
  this.width = width;
}

// method
Polygon.prototype.sayName = function() {
  console.log('Hi', this.name);
}

// usage

let poly = new Polygon('name', 300, 300);
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
let p = new Polygon(300, 400);
p.sayName();

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

  
  
  
