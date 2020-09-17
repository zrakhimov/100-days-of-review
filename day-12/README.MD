[Go to ToC](../README.md)

# Course Overview

Notice: Materials in these notes are taken and/or translated from www.eloquentjavascript.net. However not all the content might be word for word.

## ToC
* [Course Intro](#course-intro)
* [What is JavaScript?](#what-is-javascript)
* [Values, Types, and Operators](#values-types-and-operators)

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
  
  
## Values, Types, and Operators

Inside a computer everything is data, which means everything is made out of `bits` which can be represented as 0 or 1. This means that high or low electrical charge, strong or weak signal. Any information can be reduced to be a sequence of 1s and 0s.

For example, we can express the number 13 in bits. It works the same way as a decimal number, but instead of 10 different digits, you have only 2, and the weight of each increases by a factor of 2 from right to left. Here are the bits that make up the number 13, with the weights of the digits shown below them:

 0    0   0   0    1   1   0   1  
 128  64  32  16   8   4   2   1
 
So that’s the binary number 00001101. Its non-zero digits stand for 8, 4, and 1, and add up to 13.


### Values

In a RAM memory there can be more than 30 billion bits and in a hard disk even more

To be able to work with such quantities of bits without getting lost, we must separate them into chunks that represent pieces of information. In a JavaScript environment, those chunks are called values. Though all values are made of bits, they play different roles. Every value has a type that determines its role. Some values are numbers, some values are pieces of text, some values are functions, and so on.

To create a value, you must merely invoke its name. This is convenient. You don’t have to gather building material for your values or pay for them. You just call for one, and whoosh, you have it. They are not really created from thin air, of course. Every value has to be stored somewhere, and if you want to use a gigantic amount of them at the same time, you might run out of memory. Fortunately, this is a problem only if you need them all simultaneously. As soon as you no longer use a value, it will dissipate, leaving behind its bits to be recycled as building material for the next generation of values.


### Numbers

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

### Arithmetic

Main thing to do with numbers is arithmetic. Arithmetic operations such as addition or multiplication take two number values and produce a new number from them. Here's what they look like in JavaScript:

```javascript
100 + 4 * 11
```

The `+` and `*` symbols are called *operators*. 

Just as in mathematics, multiplication is done first, and you can change this by wrapping the addition in parenthesies. 

For subtraction `-` and for division `/` operators are used.

The `%` symbol is used to represent the `remainder` operation. 

```javascript
144 % 12 gives = 0
```
This operator is called `modulo`

### Special Numbers

There are three special values in JavaScipt that are considered numbers but don't behave like normal numbers.

The first two are `Infinity` and `-Infinity`, which represent the positive and  negative infinities. 

The third one is `NaN` stands for `not a number`, even though it is a value of the number type. You'll get this result when you, for example, try to calculate ` 0 / 0`, `Infinity - Infinity` or any number of other numeric operations that don't yield a meaningful result.

### Strings

The next basic data type is teh `string`. Strings are used to represent text. They are written by enclosing their content in quotes

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


### Unary Operators

Not all operators are symbols. Some are written as words, for example `typeof` which produces a string value naming the type of the value you give it.

```javascript
console.log(typeof 4.5)
-> number
console.log(typeof "x")
-> string
```
The `-` (minus) operator can be used both as a binary operator and as a unary operator

```javascript
console.log(- (10 - 2))
// -> -8
```

### Boolean Values

It is often usefulto have a value that distinguishes between only two possibilities, like "yes" and "no" or "on" and "off". For this purpose, JavaScript has a Boolean type, which has just two values, `true` and `false` which are written as words

```javascript
1 > 2
-> false
```




