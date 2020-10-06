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

* Third notation for functions, called **arrow functions** (=>) made up of equal sign and a greater-than character (**not >=**) 

```javascript
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```  
* We can omit `function` keyword, give parameter list **in `()`** and `=>` followed by `{}` which is the body

```javascript
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
```
:exclamation: When parameter list has only one, we can omit `()`
:exclamation: If body is only has single expression, rather than a block in braces, that expression will be return from th function.

* When an arrow function has no parameters at all, its parameter list is just an empty set of parantheses:

```javascript
const horn = () => {
  console.log("Toot");
};
```


[🔝](#toc)    
  
  
### The call stack

* Because a function has to jump back to the place that called it when it returns, the computer must remember the context from which the call happened. 

* The place where the computer stores this context is the **call stack**

* Everytime a function is called, the current context is stored on **top** of this stack. When a function returns it removes the top context from the stack and uses that context to contnue execution.

:warning: Storing this stack requires space in the computers' memory. When the stack grows too big, the computer will fail with a message like "out of stack space" or "too much recursion"

```javascript
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// → ??

```


  
[🔝](#toc)  

  

### Optional Arguments

* JavaScript is very broadminded about the number of arguments you pass to a function. 
* If you pass too many, the extra ones are ignored.
* If you pass too few, the missing ones will get the value `undefined`

```javascript
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16
```

* This has an upside and a downside
   * The downside is: if you pass wrong number of arguments you don't get any errors, which means it'll be harder for you to find the mistake.
   * The upside however, is that you can define one function that behaves according to the number of arguments given
   
```javascript
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```  

:exclamation: If you write an `=` operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.

```javascript
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
```
  
[🔝](#toc)  

### Closure

* What happens to local bindings when the function call that created them is no longer active?

```javascript

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

```
* Being able to reference a specific instance of a local binding in an enclosing scope is called **closure**

* A function that references bindings from local scopes around it is called **a** *closure*.

```javascript
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10
```  

:warning: Thinking about programs like this takes some practice. A good mental model is to think of function values as containing both the code in their body and the environment in which they are created. When called, the function body sees the environment in which it was created, not the environment in which it is called.  
  
[🔝](#toc)  

### Recursion

* A function that calls itself is called **recursive**. It is okay for a function to call itself *as long as it doesn't do it so often that it overflows the stack* (now you know the meaning of stackoverflow :)

```javascript

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8

``` 

:warning: But this implementation has one problem: in typical JavaScript implementations, it’s about three times slower than the looping version. Running through a simple loop is generally cheaper than calling a function multiple times.  

* The dilemma of speed versus elegance is an interesting one. You can see it as a kind of continuum between human-friendliness and machine-friendliness. Almost any program can be made faster by making it bigger and more convoluted. The programmer has to decide on an appropriate balance.



[🔝](#toc)    
  

### Functions and side effects



  
[🔝](#toc)  

### Summary


  
[🔝](#toc)  

### Exercises



[🔝](#toc)    
  
  

  
