[Go to ToC](../README.md)

# Data Structures: Objects and Arrays

## ToC
* [Arrays](#arrays)
* [Properties](#Properties)
* [ ](#)
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

  
  
  
