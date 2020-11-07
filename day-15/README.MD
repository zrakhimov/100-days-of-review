[Go to ToC](../README.md)

# Data Structures: Objects and Arrays

## ToC
* [Arrays](#arrays)
* [Properties](#properties)
* [Methods](#methods)
* [Objects](#objects)
* [Mutability](#mutability)
* [Array Loops](#array-loops)
* [Additional Methods for Arrays](#Additional-Methods-for-Arrays)

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
* `includes()` method checks whether a given value exists in the array (ES6)

:warning: These are traditional terms for operations on a `stack`. A Stack, in programming, is a data structure that allows you to push values into it and pop them out again in the opposite order so that the thing that was added last is removed first. 
  
[🔝](#toc)  

### Objects

* **Objects** are arbitrary *collection of properties*. One way to create an object is by using **braces** as an expression.

```javascript
let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
```
* Properties are separated by **commas**.
* Each property has a **name** , **colon** and a **value**
* Indent for readability
* If property name has a **space** wrap them around **quotes**

:warning: if `{}` in the start of the statement, they are a block, in other positions they describe an object.

* If the property name doesn't exist, referincing that property will give you `undefined`

* It is possible to give a *property* a value with `=` operator. 
    * replaces value on that property
    * OR creates a new property if object doesn't have that property
    
* `delete` unary operator is used (rarely) to delete a property from an object
* `in` operator when applied to string or object, tells you whether it has a property with that name

```javascript
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

```

* `Object.keys` function - return an array of strings with the Object's property names
```javascript
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
```
* `Object.assign` function - copies all properties from one object to another
```javascript
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```

:exclamation: In summary, arrays, are just a kind of object specialized for storing sequences of things. If you evaluate ```typeof []```, it produces `"object"`


  
[🔝](#toc)  

### Mutability

* We saw that object values can be modified. The types of values discussed in earlier chapters, such as numbers, strings, and Booleans, are all **immutable** —it is impossible to change values of those types.

    * If you have a string that contains "cat", it is not possible for other code to change a character in your string to make it spell "rat".
    
* Objects work differently. You can change their properties, causing a single object value to have different content at different times.

```javascript
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```
:warning: `const` binding to an object can itself not be changed and will continue to point at the same object, the **contents** of that object might change.

:exclamation: When you compare objects with JavaScript’s `==` operator, it compares by identity: it will produce `true` only if both objects are precisely the same value.

* There is no “deep” comparison operation built into JavaScript, which compares objects by contents, but it is possible to write it yourself
  
[🔝](#toc)  

### Array Loops

```javascript
const foodArray = [
  { name: 'Burrito' },
  { name: 'Pizza' },
  { name: 'Burger' },
  { name: 'Pasta' }
];

for (let i = 0; i < foodArray.length; i++) {
  console.log(`Food Name: ${foodArray[i].name}`);
}
```

* This kind of loop is common in classical JavaScript - going over arrays one element at a time is something that comes up a lot, and to do that you'd run a counter over the length of the array and pick out each element in turn

* There's a simpler way to write such loops in modern JavaScript

```javascript
for (let food of foodArray) {
  console.log(`$ Food Name: {food.name}`);
}
```

* This works not only for arrays, but also for strings and some other data structures.





[🔝](#toc)    
  
  
### Additional Methods for Arrays

#### `shift()`, `unshift()`
* We saw `push` and `pop`, which add and remove elements at the end of an array earlier. The corresponding methods for adding and removing things at the **start** of an array are called `unshift` and `shift`.

```javascript
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
```
 * That program manages a queue of tasks. You add tasks to the end of the queue by calling remember("groceries"), and when you’re ready to do something, you call getTask() to get (and remove) the front item from the queue. The rememberUrgently function also adds a task but adds it to the front instead of the back of the queue. 
 
#### `indexOf()`, `lastIndexOf()`

* To search for a specific value, arrays provide an `indexOf` method. 
* The method searches through the array from the start to the end and returns the index at which the requested value was found—or `-1` if it wasn’t found. 
* To search from the end instead of the start, there’s a similar method called `lastIndexOf`.

```javascript
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
```
:warning: Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching.  

 
#### `slice()`

* Another fundamental array method is `slice`, which takes start and end indices and returns an array that has only the elements between them. 
* The start index is inclusive, the end index exclusive.

```javascript
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```
:warning: When the end index is not given, slice will take all of the elements after the start index. You can also omit the start index to copy the entire array.

 
 
[🔝](#toc)  

  
  
  
  
### `shift()` & `unshift`


  
[🔝](#toc)  

  
  
    
  
### `shift()` & `unshift`


  
[🔝](#toc)  

  
  
    
  
### `shift()` & `unshift`


  
[🔝](#toc)  

  
  
    
  
### `shift()` & `unshift`


  
[🔝](#toc)  

  
  
  
