[Go to ToC](../README.md)

# Data Structures: Objects and Arrays

## ToC
* [Arrays](#arrays)
* [Properties](#properties)
* [Methods](#methods)
* [ ](#)
* [ ](#)
* [](#)
* [](#)

### Arrays

* To work with a chunk of data, we need to represent it in computer memory. Let's say we want to store a list of numbers: 2, 3, 5, 7, and 11.
* We could use separate variables (not efficient) for each one or we can represent it in a string "2 3 5 7 11" (need a way to extract and convert back to Number) 
* Fortunately: javascript provides data type specifically for storing sequence of values. It is called an **array** and is represented by `[]` separated by `,`

```javascript
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3

```
* Array elements are accessed with `[]` also by providing and `index` - location of the that value in the array.
:warning: Zero-based counting has a long tradition in technology and in certain ways makes a lot of sense, but it takes some getting used to.


[🔝](#toc)  
  

### Properties

* So far we've seen some weird looking `myString.length` and `Math.max` in the past. These are expressions that access a **property** of some value.

    * `length` is the *property* of the value `myString`
    * `max` is the *property* of `Math` object.
    
* Almost all javascript values have properties except `null` and `undefined`

```javascript
null.length;
// → TypeError: null has no properties
```

* There are **2 ways** to access properties in JavaScript:
    1. `.` (dot notation) => `value.x`
    2. `[]` (square bracket) => `value[x]`
    
* When using a `.` dot, the word after dot is the **literal name** of the property
* When using a `[]` square brackets, the expression between the brackets is *evaluated* to get the property name

:exclamation: The elements in an array are stored as the *properties*, using numbers as *property names*, You can't use dot notation with the numbers.



[🔝](#toc)  
  
### Methods

* Both string and array values contain, in addition to the `length` property, a number of properties that hold function values:
  *   `.toUpperCase()`
  
```javascript
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
```
* Every string has a `toUpperCase()` property. When called, it will return a copy of the string in which all letters have been converted to uppercase.
* There's also `toLowerCase()`, going the other way

:exclamation: Properties that contain *functions* are generally called **methods** of the value they belong to, as in `toUpperCase` is a method of a string.

* This example demonstrates two methods you can use to manipulate arrays:

```javascript
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

```

* `push()` method adds values to the end of an array
* `pop()` method removes the last value in the array

:warning: These are traditional terms for operations on a `stack`. A Stack, in programming, is a data structure that allows you to push values into it and pop them out again in the opposite order so that the thing that was added last is removed first. 
  
[🔝](#toc)  

### 


  
[🔝](#toc)  

###


  
[🔝](#toc)  

### 



[🔝](#toc)    
  
  
### 


  
[🔝](#toc)  

  
  
  
