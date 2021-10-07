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
* [Strings & Their Properties](#strings-and-their-properties)
* [Rest Parameters](#rest-parameters)
* [Destructuring](#destructuring)
* [JSON](#json)
* [Exercises](#exercises)

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

#### `concat()`

* The `concat` method can be used to glue arrays together to create a new array, similar to what the `+` operator does for strings.  
```javascript
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

```

:warning: If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array.
 
[🔝](#toc)  

  
  
  
  
### Strings and Their Properties

* We can read properties like `length` and `toUpperCase` from string values. But if we try to create a new property, javascript doesn't complain, but it doesn't actually work.

```javascript
let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// → undefined
```
#### `slice()` & `indexOf`

* But these types do have built-in properties. Every string value has a number of methods. Some very useful ones are `slice` and `indexOf`, which resemble the array methods of the same name.

```javascript

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5

```
:exclamation: One difference is that a string’s indexOf can search for a string containing more than one character, whereas the corresponding array method looks only for a single element.

```javascript
console.log("one two three".indexOf("ee"));
// → 11
```

#### `trim()`

* The `trim` method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

```javascript
console.log("  okay \n ".trim());
// → okay
```

#### `padStart()`

* `padStart` takes the desired length and padding character as arguments.

```javascript
console.log(String(6).padStart(3, "0"));
// → 006
```

#### `split() & join()`

* You can split a string on every occurrence of another string with split and join it again with join.

```javascript
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping
```

#### `repeat()`

* A string can be repeated with the repeat method, which creates a new string containing multiple copies of the original string, glued together.

```javascript
console.log("LA".repeat(3));
// → LALALA
```
  
[🔝](#toc)  

 
### Rest Parameters

* It can be useful for a function to accept any number of arguments. For example, `Math.max` computes the maximum of **all** the arguments it is given.

* To write such a function, you put three dots before the function’s last parameter, like this:
* When such a function is called, the **rest parameter** is bound to an array containing all further arguments.
```javascript
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9

```
* You can use a similar three-dot notation to **call** a function with an array of arguments.

```javascript
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7
```

* This **spreads** out the array into the function call, passing its elements as separate arguments. It is possible to include an array like that along with other arguments, as in `max(9, ...numbers, 2)`.

* Square bracket array notation similarly allows the `spread operator` to spread another array into the new array.

```javascript
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]
```


  
[🔝](#toc)  


  
### Destructuring

* Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals

* Without destructuring assignment, you might access the first three items in an array like this:

```javascript
var first = someArray[0];
var second = someArray[1];
var third = someArray[2];
```

* With destructuring assignment, the equivalent code becomes more concise and readable:
```javascript
var [first, second, third] = someArray;
```

* Destructuring on objects lets you bind variables to different properties of an object. You specify the property being bound, followed by the variable you are binding its value to.

```javascript
var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };

var { name: nameA } = robotA;
var { name: nameB } = robotB;

console.log(nameA);
// "Bender"
console.log(nameB);
// "Flexo"
```

:warning: Note that if you try to destructure null or undefined, you get an error, much as you would if you directly try to access a property of those values.

```javascript
var {blowUp} = null;
// TypeError: null has no properties
```
    
[🔝](#toc)  


  
### JSON

* Because properties only grasp their value, rather than contain it, objects and arrays are stored in the computer’s memory as sequences of bits holding the addresses—the place in memory—of their contents. So an array with another array inside of it consists of (at least) one memory region for the inner array, and another for the outer array, containing (among other things) a binary number that represents the position of the inner array.

* If you want to save data in a file for later or send it to another computer over the network, you have to somehow convert these tangles of memory addresses to a description that can be stored or sent. You could send over your entire computer memory along with the address of the value you’re interested in, I suppose, but that doesn’t seem like the best approach.

* What we can do is serialize the data. That means it is converted into a flat description. A popular serialization format is called **JSON (pronounced “Jason”), which stands for JavaScript Object Notation**. It is widely used as a data storage and communication format on the Web, even in languages other than JavaScript.

```javascript
{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}
```
:exclamation: All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.

#### `JSON.srtingify() & JSON.parse()`

* JavaScript gives us the functions JSON.stringify and JSON.parse to convert data to and from this format. The first takes a JavaScript value and returns a JSON-encoded string. The second takes such a string and converts it to the value it encodes.

```javascript
let string = JSON.stringify({squirrel: false,
                             events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]
```
  
[🔝](#toc)  

  
 
### Exercises

#### 1) The sum of a range

* Write a range function that takes two arguments, `start` and `end`, and returns an array containing all the numbers from start up to (and including) end.

* Next, write a `sum` function that takes an array of numbers and returns the sum of these numbers.

```javascript

// Your code here

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
```

* BONUS: Modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].


#### 2) Reversing an array

* Arrays have a `reverse` method that changes the array by inverting the order in which its elements appear.
* For this exercise, write two functions, `reverseArray` and `reverseArrayInPlace`
* The first, `reverseArray`, takes an array as argument and produces a **new** array that has the same elements in the inverse order.
* The second, `reverseArrayInPlace`, does what the reverse method does: it **modifies the array** given as argument by reversing its elements. 
:warning: Neither may use the standard reverse method.

HINT: Useful to use `Math.floor` to round down.

```javascript

// Your code here.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

```


#### 3) Deeper Comparison

* The `==` operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.


* Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

* To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

:warning: Hint: The `Object.keys` function will be useful when you need to go over the properties of objects to compare them.


```javascript
// Your code here.

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
```

  
[🔝](#toc)  

  
# :uzbekistan:  

## Amaliy Vazifalar

1) `range` degan funksiya yozing. Bu funksiya `start` va `end` degan ikkita argument qabul qiladi, va o'sha `start` ichidagi sondan `end` ichidagi songacha bo'lgan hamma sonlarni array shaklida qaytaradi.
Masalan: `range(1,10)` berilganda bu funksiya [1,2,3,4,5,6,7,8,9,10] ni qaytaradi.

Undan keyin, `sum` degan funksiya yozing. Bu funksiya argument orqali array qabul qiladi, ichida array dagi hamma elementlarni yig'indisini hisoblab, shu yig'indini qaytaradi. Masalan, tepadagi 1 dan 10 gacha bo'lgan array ni `sum` ga bersak, bu funksiya `55` sonini qaytaradi.

```javascript
connsole.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
```
:exclamation: Bonus: tepadagi `range` funksiyani ozgina o'zgartiring, bu funksiya **ixtiyoriy** uchinchi argument qabul qilsin. Bu argument array qurilayotgan paytda nechta "sakrash" kerakligini bildiradi. Masalan, bu argumentga `2` soni berilsa (`range(1,10,2)`), [1,3,5,7,9] ni qaytaradi. Uchinchi argument, manfiy bo'lishi ham mumkin. Bu holatda "sakrash" orqaga qarab ketadi. Masalan, bu argumentga `-1` berilsa (`range(5,2,-1)`) funksiya [5,4,3,2] ni qaytarsin.
  
  
  
[🔝](#toc)  

2)  Array ni teskarisi

Array larda `reverse` degan metod bor. Bu metod array ni ketma ketligini teskarisiga o'giradi. Bu vazifa uchun, siz ikkita funksiya yozing: `reverseArray` va `reverseArrayInPlace`. 

1. `reverseArray` argumentiga bitta array ni qabul qilsin va bu arrayni usida ishlab **yangi** array ni qaytirsin. Bu yangi array, original arrayni teskarisi bo'lsin. Masalan ['A', 'B', 'C'] array kirsa, bu funksiyadan **yangi** ['C', 
'A', 'B'] chiqadi. (bu funksiya pure (sof) bo'lib, argumentga tushgan array ni o'zgartirmaydi)

2. `reverseArrayInPlace` funksiyasi tepadadgi funksiyaga o'xshab array ni teskarisiga o'giradi, lekin farqi, bu funksiya yangi array emas, shu argumentga berilgan arrayni teskarisiga o'girib bersin. 

:warning: Bu ikkala funksiya ham `reverse()` metodini *ishlatmagan holda* yaratilsin.

```javascript

// Sizning code ingiz

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
```

  
  
[🔝](#toc)  

  
3)  Chuqur solishtirish

Biz bilamizki `==` operatori obyektlarda qo'llanilganda, bu obyektlar ikkisi birmi, ya'ni  bitta addressda joylashganmi yoki yo'qmi, shuni solishtiradi. Lekin ba'zida bu ikki obyektni `id` si emas, balki ichidagi qiymatlari bir biriga tengmi yoki yo'qmi shuni bilmoqchi bo'lamiz. 

Sizni vazifangiz, shu funksiyani yaratish. `deepEqual` degan funksiya yarating: bu funksiya 2 ta argument qabul qilsin, va shu 2 argumentni solishtirib, agar teng bo'lsa `true` yoki teng bo'lmasa `false` deb qaytarsin.

:warning: Obyekt bo'lmagan argumentlarni solishtirayotganda "qat'iy" tenglik operatorini ishlatish afzalroq `===`

Agar 2 argument ham "object" type bo'lsa (`typeof arg1 == "object"`), unda "deep comparison" (chuqur solishtirish) ni amalga oshiring: ya'ni obyektning har bir `property` si ikkinchi obyektning xuddi shu `property`siga teng.

:exclamation: `typeof null` ham "object" ni beradi, shuni hisobga oling. 

Yordam: `Object.keys` funksiyasi sizga obyektni `property`larini solishtirgani yordam beradi.

```javascript

// Sizning code ingiz

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
```
  
  
[🔝](#toc)  

    
