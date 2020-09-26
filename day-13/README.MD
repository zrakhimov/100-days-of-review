[Go to ToC](../README.md)

# Program Structure

In this lesson, we will start to do things that can actually be called *programming*. We will expand our command of the JavaScript language beyond the nouns and sentence fragments we’ve seen so far, to the point where we can express meaningful prose.

## ToC
* [Expressions and statements](#expressions-and-statements)
* [ ](#)
* [ ](#)
* [ ](#)
* [ ](#)
* [](#)
* [](#)

## Expressions and statements

A fragment of code that produces a value is called an **expression**. Every value that is written literally (such as 22 or "psychoanalysis") is an expression. An expression between parentheses is also an expression, as is a binary operator applied to two expressions or a unary operator applied to one.  

Expressions can contain other expressions in a way similar to how subsentences in human languages are nested—a subsentence can contain its own subsentences, and so on. This allows us to build expressions that describe arbitrarily complex computations.  

If an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence. A **program** is a list of statements.  

The simplest kind of statement is an expression with a semicolon after it. This is a program:  

```javascript
1;
!false;
```  

:warning: `;` - semicolon in javascript is optional, but it's best practice to include it.

The above code doesn't do much except return `1` and `true` and immediately throws it out.

[🔝](#toc)  
  

## Bindings

To catch and hold values, instead of throwing out the value, JavaScript provides a thing called a **binding** or **variable**:

```javascript
let caught = 5 * 5;
```
This is a second kind of statement. The special word (keyword) `let` indicates that this sentence is going to define a binding. It is followed by the name of the binding and, if we want to immediately give it a value, by an **=** operator and an expression.  

After a binding has been defined, its name can be used as an expression. The value of such an expression is the value the binding currently holds. Here’s an example:  

```javascript
let ten = 10;
console.log(ten * ten);
// → 100
```  

When a binding points at a value, that does not mean it is tied to that value forever. The = operator can be used at any time on existing bindings to disconnect them from their current value and have them point to a new one.

```javascript

let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

```

:exclamation: It's important to visualize variables and their values in terms of `variable pointing to a value` instead of `variable contains a value`. We might think when we change the value of a particular variable, it just replaces the value, where in physically, the old value is still there, but variable now *points* to a new value.

A program can access only the values that it still has a reference to. If your variable doesn't point to anything, it's value will be `undefined`.

A single let statement may define multiple bindings. The definitions must be separated by commas.  


```javascript

let one = 1, two = 2;
console.log(one + two);
// → 3

```

The words ```var``` and const can also be used to create bindings, in a way similar to let.


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

  
  
  
