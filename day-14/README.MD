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

* Each binding has a *scope*, which is part of the program in which the binding is visible
* For bindings which are declared outside of any function of *block* the scope is the whole program. These called *global scope*  
* For bindings which are declared inside of any function or block, they can only be accessed within that block. These are called *local scope*

* Bindings declared with `let` and `const` are in fact local to the block that they are declared in.

:warning: `var` works differently in this case, are visible throughout the whole function that they appear in—or throughout the global scope, if they are not in a function.

```javascript 
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
```  

```javascript

const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10

```



[🔝](#toc)  
  
### Nested scope

* Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality.

```javascript
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
```
* The code inside the ingredient function can see the factor binding from the outer function. But its local bindings, such as unit or ingredientAmount, are not visible in the outer function. 

  
[🔝](#toc)  

### Functions as values

* A function binding usually simply acts as a name for specific piece of the program. 

* It acts just any other value, which means it can do all the things that other values can do such as:

      * use it in arbitrary expressions, not just call it
      * store function value it in a new binding
      * pass it as argument to a function
      * assign it a new value
      
```javascript
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
```


  
[🔝](#toc)  

### Declaration notation

* There's a slightly shorter way to declare a function binding.

* When `function` keyword is used at the start of a statement, it works differently:

```javascript
function square(x) {
   return x * x;
}
```
:exclamation: This is a **function declaration** and doesn't require `;`

```javascript
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```  

:warning: The code above works, even though the function is defined *below* the code that uses it. 

* Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope.



  
[🔝](#toc)  

### Arrow functions




[🔝](#toc)    
  
  
### The call stack



  
[🔝](#toc)  

  

### Optional Arguments



  
[🔝](#toc)  

### Closure


  
[🔝](#toc)  

### Recursion



[🔝](#toc)    
  
  
### Growing functions



  
[🔝](#toc)  

  


### Functions and side effects



  
[🔝](#toc)  

### Summary


  
[🔝](#toc)  

### Exercises



[🔝](#toc)    
  
  

  
