[Go to ToC](../README.md)

# Course Overview

Notice: Materials in these notes are taken and/or translated from www.eloquentjavascript.net. However not all the content might be word for word.

## ToC
* [Course Intro](#course-intro)  
* [What is JavaScript?](#what-is-javascript)  
* [Under the Hood](#under-the-hood)  
* [Values](#values)  
* [Numbers](#number)  
  * [Arithmetic Operators](#arithmetic-operators)  
  * [Special Numbers](#special-numbers)  
* [Strings](#strings)  
  * [Unary Operators](#unary-operators)  
* [Boolean Values](#boolean-values)  
  * [Comparison Operators](#comparison-operators)
  * [Logical Operators](#logical-operators)
* [Empty Values](#empty-values)
* [Automatic Type Conversion](#automatic-type-conversion)
* [Short-Circuiting of Logical Operators](#short---circuitting-of-logical-operators)
* [Summary](#summary)

### Course Intro

* JavaScript is one of the most popular programming languages. According to GitHub, JavaScript is the top programming language, and it's more than twice as popular as the runner‑up, Python. Learning the JavaScript language is valuable for any developer. 

* JavaScript is the language of the web supported by all major browsers, but tools exist to take JavaScript far beyond web pages. You can crdeate native smartphone and tablet apps, desktop apps for Windows and Mac, and even server‑side apps using JavaScript. 

* In this course, I'll cover JavaScript programming for those who are completely new to programming. This is also valuable for programmers who are just new to the JavaScript language. We'll learn the JavaScript features needed to get you started. By the end of this course, you'll know the very basics of JavaScript and you'll be able to build simple programs for the web. 

* No prior knowledge of programming is required for this course.   


[🔝](#toc)  


## What is JavaScript?

* JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser.

* It is important to note that JavaScript has almost nothing to do with the programming language named Java

* When JavaScript was being introduced, the Java language was being heavily marketed and was gaining popularity. Someone thought it was a good idea to try to ride along on this success
  
* After its adoption outside of Netscape, a standard document was written to describe the way the JavaScript language should work so that the various pieces of software that claimed to support JavaScript were actually talking about the same language. This is called the ECMAScript standard, after the Ecma International organization that did the standardization. In practice, the terms ECMAScript and JavaScript can be used interchangeably—they are two names for the same language.

* Major version came out (ES6) in 2015.  


  
[🔝](#toc)  
  
  
## Under the Hood

Inside a computer everything is data, which means everything is made out of `bits` which can be represented as 0 or 1. This means that high or low electrical charge, strong or weak signal. Any information can be reduced to be a sequence of 1s and 0s.

For example, we can express the number 13 in bits. It works the same way as a decimal number, but instead of 10 different digits, you have only 2, and the weight of each increases by a factor of 2 from right to left. Here are the bits that make up the number 13, with the weights of the digits shown below them:

```  0   0   0   0   1   1   0   1  ```  
```128  64  32  16   8   4   2   1  ```
 
So that’s the binary number 00001101. Its non-zero digits stand for 8, 4, and 1, and add up to 13.  


[🔝](#toc)  



### Values

In a RAM memory there can be more than 30 billion bits and in a hard disk even more

To be able to work with such quantities of bits without getting lost, we must separate them into chunks that represent pieces of information. In a JavaScript environment, those chunks are called values. Though all values are made of bits, they play different roles. Every value has a type that determines its role. Some values are numbers, some values are pieces of text, some values are functions, and so on.

To create a value, you must merely invoke its name. This is convenient. You don’t have to gather building material for your values or pay for them. You just call for one, and whoosh, you have it. They are not really created from thin air, of course. Every value has to be stored somewhere, and if you want to use a gigantic amount of them at the same time, you might run out of memory. Fortunately, this is a problem only if you need them all simultaneously. As soon as you no longer use a value, it will dissipate, leaving behind its bits to be recycled as building material for the next generation of values.  


[🔝](#toc)  



## Numbers

Values of the number type are, unsurprisingly, numeric values. In a JavaScript program, they are written as follows: 

```javascript
13
```

Javascript uses a fixed number of bits, 64 of them, to store a single number value.
Given 64 binary digits, you can represent 2^64 different numbers (18 quantillion) 

When you consider negative numbers, it you can represent about 9 quantillion, still a lot.

Fractional numbers are written using a dot:

```javascript
9.81
```

For very big or very small numbers, you may also use scientific notation by adding  an e (for exponent), followed by the exponent of the number

```javascript
2.998e8
```

:warning: Calculations with fractional numbers are not generally precise, just as pi cannot be precisly expressed by a finite number of decimal digits.   



[🔝](#toc)  



#### Arithmetic Operators

Main thing to do with numbers is arithmetic. Arithmetic operations such as addition or multiplication take two number values and produce a new number from them. Here's what they look like in JavaScript:

```javascript
100 + 4 * 11
```

The `+` and `*` symbols are called *operators*. 

Just as in mathematics, multiplication is done first, and you can change this by wrapping the addition in *parenthesies*. 

For subtraction `-` and for division `/` operators are used.

The `%` symbol is used to represent the `remainder` operation. 

```javascript
144 % 12 gives = 0
```
This operator is called `modulo`  


[🔝](#toc)  




### Special Numbers

There are three special values in JavaScipt that are considered numbers but don't behave like normal numbers.

* `Infinity`
* `-Infinity`
* `NaN`

The first two are `Infinity` and `-Infinity`, which represent the positive and  negative infinities. 

The third one is `NaN` stands for `not a number`, even though it is a value of the number type. You'll get this result when you, for example, try to calculate ` 0 / 0`, `Infinity - Infinity` or any number of other numeric operations that don't yield a meaningful result.  


[🔝](#toc)  



## Strings

The next basic data type is the `string`. Strings are used to represent text. They are written by enclosing their content in quotes

```javascript
`Down on the sea`
"Lie on the ocean"
'Float on the ocean'
```

You can use single quotes, double quotes, or backticks to mark them, as long as it has an ending quote that match.

* Strings, too, have to be modeled as series of bits to be able to exist inside computer. The way JavaScript does this is based on the `Unicode` standard. This standard assigns a number to virtually every character you would ever need.

* Strings cannot be divided, multipled, or subtracted, but the `+` operator can be used on them. It `concatenates` two strings together

```javascript

"con" + "cate" + "e" + "nate" => "concatenate"

```

:warning: template literals > can do a few more tricks. Apart from being able to span lines, they can also embed other values.

```javascript
`half of 100 is ${100 / 2}`
```
When you write something inside `${}` in a template literal, its result will be computed.  



[🔝](#toc)  



### Unary Operators

Not all operators are symbols. Some are written as words, for example `typeof` which produces a string value naming the type of the value you give it.

```javascript
console.log(typeof 4.5)
-> number
console.log(typeof "x")
-> string
```
The `-` (minus) operator can be used both as a *binary operator* and as a unary operator

```javascript
console.log(- (10 - 2))
// -> -8
```  

[🔝](#toc)  


## Boolean Values

It is often useful to have a value that distinguishes between only two possibilities, like "yes" and "no" or "on" and "off". For this purpose, JavaScript has a Boolean type, which has just two values, `true` and `false` which are written as words

```javascript
1 > 2
-> false
```  
 
[🔝](#toc)  



### Comparison Operators

The `>` and `<` signs are the traditional symbols for “is greater than” and “is less than”, respectively. They are binary operators. Applying them results in a Boolean value that indicates whether they hold true in this case.

```javascript

console.log("Aardvark" < "Zoroaster")
// → true

```
When comparing strings, JavaScript goes over the characters from left to right, comparing the Unicode codes one by one.

Other similar operators are `>=` (greater than or equal to), `<=` (less than or equal to), `==` (equal to), and `!=` (not equal to).

:warning: There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”). NaN is supposed to denote the result of a nonsensical computation, and as such, it isn’t equal to the result of any other nonsensical computations.
```javascript
console.log(NaN == NaN)
// → false
```    
[🔝](#toc)  



### Logical Operators

There are also some operations that can be applied to Boolean values themselves. JavaScript supports three logical operators:

* `&&` - and
* `||` - or
* `!` - not

```javascript
console.log(true && false)
// → false
console.log(false || true)
// → true
console.log(!false)
// → true
```


:warning: The last logical operator I will discuss is not unary, not binary, but *ternary, operating on three values. It is written with a question mark and a colon, like this:

```javascript
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```
This one is called the conditional operator (or sometimes just the ternary operator since it is the only such operator in the language). The value on the left of the question mark “picks” which of the other two values will come out. Whe
n it is true, it chooses the middle value, and when it is false, it chooses the value on the right.  


[🔝](#toc)  




## Empty Values

There are two special empty values, which denote absence of a meaningful value

* `null`
* `undefined`

Many operations in the language that don’t produce a meaningful value (you’ll see some later) yield undefined simply because they have to yield some value.

The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time. In cases where you actually have to concern yourself with these values, I recommend treating them as mostly interchangeable.    

  
[🔝](#toc)  



## Automatic Type Conversion

JavaScript goes out of its way to accept almost any program you give it, even programs that do odd things. This is nicely demonstrated by the following expressions:

```javascript
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
```

When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect

When comparing values of the same type using ==, the outcome is easy to predict: you should get true when both values are the same, except in the case of NaN. But when the types differ, JavaScript uses a complicated and confusing set of rules to determine what to do. In most cases, it just tries to convert one of the values to the other value’s type. However, when null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined.

```javascript
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```
:warning: When you do not want any type conversions to happen, there are two additional operators: `===` and `!==`

```javascript
"5" == 5
true
"5" === 5
false
```  

[🔝](#toc)  



## Short-Circuiting of Logical Operators

The logical operators ``&&`` and ``||`` handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the right-hand value.

:exclamation: The rules for converting strings and numbers to Boolean values state that `0`, `NaN`, and the empty string (`""`) count as `false`

* The `||` operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise. This has the expected effect when the values are Boolean and does something analogous for values of other types.

* The `&&` operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right.  


[🔝](#toc)  



## Summary  

We looked at four types of JavaScript values: numbers, strings, boolean, and undefined values.

Such values are created by typing in their name `(true, null)` or value `(13, "abc")`. You can combine and transform values with operators. We saw binary operators for arithmetic `(+, -, *, /, and %)`, string concatenation `(+)`, comparison `(==, !=, ===, !==, <, >, <=, >=)`, and logic `(&&, ||)`, as well as several unary operators (- to negate a number, ! to negate logically, and typeof to find a value’s type) and a ternary operator (?:) to pick one of two values based on a third value.

This gives you enough information to use JavaScript as a pocket calculator but not much more. The next chapter will start tying these expressions together into basic programs.  


[🔝](#toc)  

