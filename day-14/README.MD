[Go to ToC](../README.md)

# Functions

* Functions are the most important part of JavaScript Language. It gives us the ability to wrap a program in a value, which reduces repeating ourselves and modularity.  d
* Like we humans have a vocabulary to use in our speech, JavaScript has also a vocabulary that has about 20,000 words in it. With the help of fuctions we can expand on this vocabulary to create our own.


## ToC
* [Defining a function](#defining-a-function)  
* [Bindings and scopes](#bindings-and-scopes)  
* [Nested scope](#nested-scope)  
* [Functions as values](#functions-as-values)  
* [Declaration notation](#declaration-notation)  
* [Arrow functions](#arrow-functions)
* [The call stack](#the-call-stack)
* [Optional Arguments](#optional-arguments)  
* [Closure](#closure)  
* [Recursion](#recursion)  
* [Growing functions](#growing-functions)  
* [Functions and side effects](#functions-and-side-effects)  
* [Summary](#summary)  
* [Exercises](#exercises)   


### Defining a function  

* In machine level, function is a sequence of 1s and 0s just like any other value.

* Functions are created with the keyword *function*

* Functions have a set of 
    * *parameters* - values that function accepts (within `()`)
    * *body* - contains the statements that are to be executed when the function is called

* Body is always wrapped within `{}`  

```javascript
const square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144
```  


* Functions can have multiple parameters or no parameters at all.
* Functions can `return` a value OR just perform `side-effect`  

:exclamation: If function doesn't return anything and you omit return statement, function still returns `undefined`  

:warning: Parameters to a function behaves like regular bindings, however is passed by the `caller`.

```javascript  
const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// → Pling!

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024

```





[🔝](#toc)  
  

### Bindings and scopes





[🔝](#toc)  
  
### Nested scope




  
[🔝](#toc)  

### Functions as values



  
[🔝](#toc)  

### Declaration notation



  
[🔝](#toc)  

### Arrow functions




[🔝](#toc)    
  
  
### The call stack



  
[🔝](#toc)  

  
  
  
  

  
[🔝](#toc)  

### Optional Arguments



  
[🔝](#toc)  

### Closure


  
[🔝](#toc)  

### Recursion



[🔝](#toc)    
  
  
### Growing functions



  
[🔝](#toc)  

  
  
  


  
[🔝](#toc)  

### Functions and side effects



  
[🔝](#toc)  

### Summary


  
[🔝](#toc)  

### Exercises



[🔝](#toc)    
  
  

  
