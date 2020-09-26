[Go to ToC](../README.md)

# Program Structure

In this lesson, we will start to do things that can actually be called *programming*. We will expand our command of the JavaScript language beyond the nouns and sentence fragments we’ve seen so far, to the point where we can express meaningful prose.

## ToC
* [Expressions and statements](#expressions-and-statements)
* [Bindings](#bindings)  
* [Binding Names](#binding-names)  
* [The Environment ](#the-environment)  
* [Functions](#functions)  
* [Console Log Function](#console-log-function)  
* [Return Values](#return-values)  
* [Control Flow](#control-flow)   
* [Conditional Execution](#conditional-execution)  
* [While And Do Loops](#while-and-do-loops)  
* [Indenting](#indenting)  
* [For Loop](#for-loop)  
* [Breaking Out of a Loop](#breaking-out-of-a-loop)  
* [Updating bindings succinctly](#updating-bindings-succinctly)  
* [Switch](#switch)
* [Capitalization](#capitalization)
* [Comments](#comments)
* [Summary](#summary)
* [Exercises](#exercises)


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

```javascript
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda
```

:exclamation: The first, ```var``` (short for “variable”), is the way bindings were declared in pre-2015 JavaScript.

The word `const` stands for constant. It defines a constant binding, which points at the same value for as long as it lives. This is useful for bindings that give a name to a value so that you can easily refer to it later.

[🔝](#toc)  
  
## Binding Names

Binding names can be any word. Digits can be part of binding names—`catch22` is a valid name, for example—but the name must not start with a digit. A binding name may include dollar signs (`$`) or underscores (`_`) but no other punctuation or special characters.

Words with a special meaning, such as `let`, are keywords, and they may not be used as binding names. There are also a number of words that are “*reserved for use*” in future versions of JavaScript, which also can’t be used as binding names. The full list of keywords and reserved words is rather long.   

```javascript
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
```

Don’t worry about memorizing this list. When creating a binding produces an unexpected syntax error, see whether you’re trying to define a reserved word.


  
[🔝](#toc)  

### The Environment

The collection of bindings and their values that exist at a given time is called the **environment**. When a program starts up, this environment is not empty. It always contains bindings that are part of the language standard, and most of the time, it also has bindings that provide ways to interact with the surrounding system. For example, in a browser, there are functions to interact with the currently loaded website and to read mouse and keyboard input.

  
[🔝](#toc)  

### Functions

* A lot of the values provided in the default environment have the type **function**.

* A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program. For example, in a browser environment, the binding prompt holds a function that shows a little dialog box asking for user input. It is used like this:

```javascript

prompt("Enter passcode");

```

:warning: Executing a function is called **invoking**, **calling**, or **applying** it.

* In the example, the prompt function uses the string that we give it as the text to show in the dialog box. Values given to functions are called **arguments**. Different functions might need a different number or different types of arguments.

  
[🔝](#toc)  

### Console Log function

If you've noticed in the examples, we're using `console.log()` function a lot. 

* Most JavaScript systems (including all modern web browsers and Node.js) provide a console.log function that writes out its arguments to some text output device.

* In browsers, the output lands in the JavaScript console. (`F12` button on windows)

```javascript

let x = 30;
console.log("the value of x is", x);

```

:warning: Though binding names cannot contain period characters, console.log does have one. This is because console.log isn’t a simple binding. It is actually an expression that retrieves the log property from the value held by the console binding.
 


[🔝](#toc)    
  
  
### Return Values

Showing a dialog box or writing text to the screen is a **side effect**. A lot of functions are useful because of the side effects they produce. Functions may also produce values, in which case they don’t need to have a side effect to be useful. For example, the function Math.max takes any amount of number arguments and gives back the greatest: 

```javascript

console.log(Math.max(2, 4));
// → 4

```
* When a function produces a value, it is said to **return** that value

:warning: we'll see how to create our own functions in the next lesson

  
[🔝](#toc)  

  
  
## Control Flow

* When your program contains more than one statement, the statements are executed as if they are a story, from top to bottom. This example program has two statements. The first one asks the user for a number, and the second, which is executed after the first, shows the square of that number.

```javascript
let x = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + x * x);
```
The function Number converts a value to a number. We need that conversion because the result of prompt is a string value, and we want a number. There are similar functions called String and Boolean that convert values to those types.  



[🔝](#toc)  

    
## Conditional Execution

* We may, for example, want to create a branching road, where the program takes the proper branch based on the situation at hand. This is called conditional execution. 

* Conditional execution is created with the `if` keyword in JavaScript. 

```javascripot
let x = Number(prompt("Pick a number"));
if (!Number.isNaN(x)) {
  console.log("Your number is the square root of " + x * x);
}
```

* The `if` keyword executes or skips a statement depending on the value of a Boolean expression. The deciding expression is written after the keyword, between parentheses, followed by the statement to execute.

* The Number.isNaN function is a standard JavaScript function that returns true only if the argument it is given is NaN. The Number function happens to return NaN when you give it a string that doesn’t represent a valid number. Thus, the condition translates to `unless x is not-a-number, do this`.

* The statement after the `if` is wrapped in braces (`{` and `}`) in this example. The braces can be used to group any number of statements into a single statement, called a **block**. 

:warning: You can skip `{}` if the there's only one statement, however is not the best practice to omit them.

* You often won’t just have code that executes when a condition holds true, but also code that handles the other case. This alternate path is represented by the second arrow in the diagram. You can use the **`else`** keyword, together with if, to create two separate, alternative execution paths.

```javascript
let x = Number(prompt("Pick a number"));
if (!Number.isNaN(x)) {
  console.log("Your number is the square root of " +
              x * x);
} else {
  console.log("Hey. Why didn't you give me a number?");
}
```
* If you have more than two paths to choose from, you can “chain” multiple if/else pairs together with **`else if`**.

```javascript

let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

```  

[🔝](#toc)  

    
## While And Do Loops

Consider a program that outputs all even numbers from 0 to 12. One way to write this is as follows:

```javascript
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
```

What if we want until 1000? It won't be practical to do it one by one. What we need is a way to run a piece of code multiple times. This form of control flow is called a **loop**.

```javascript
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera
```

* A statement starting with the keyword **`while`** creates a loop. The word while is followed by an expression in parentheses and then a statement, much like `if`. 

* The loop keeps entering that statement as long as the expression produces a value that gives `true` when converted to Boolean.

* With this in mind, let's look at another example that calculates 2^10:

```javascript
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024
```
:warning: TIP: get used to count from 0 :)

* A **`do`** loop is a control structure similar to a `while` loop. It differs only on one point: a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution. To reflect this, the test appears after the body of the loop.

```javascript
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
```
* This program will force you to enter a name. It will ask again and again until it gets something that is not an empty string. Applying the `!` operator will convert a value to Boolean type before negating it, and all strings except `""` convert to true. This means the loop continues going round until you provide a non-empty name.


  
[🔝](#toc)  

    
## Indenting

* The role of this indentation inside blocks is to make the structure of the code stand out. In code where new blocks are opened inside other blocks, it can become hard to see where one block ends and another begins. With proper indentation, the visual shape of a program corresponds to the shape of the blocks inside it.

```javascript

if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}

```

  
[🔝](#toc)  


    
## For Loops

* Many loops follow the pattern shown in the `while` examples. First a “counter” binding is created to track the progress of the loop. Then comes a while loop, usually with a test expression that checks whether the counter has reached its end value. At the end of the loop body, the counter is updated to track progress.

* Because this pattern is so common, JavaScript and similar languages provide a slightly shorter and more comprehensive form, the `for` loop.

```javascript
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera
```

:warning: The parentheses after a `for` keyword must contain two semicolons. 
  1. The part before the first semicolon **initializes** the loop, usually by defining a binding. 
  2. The second part is the expression that **checks** whether the loop must continue. 
  3. The final part **updates** the state of the loop after every iteration. In most cases, this is shorter and clearer than a while construct.

* Here's the code to find 2^10 with `for` loop

```javascript
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
```
  
[🔝](#toc)  

      
## Breaking Out of a Loop

* Having the looping condition produce `false` is not the only way a loop can finish. * * There is a special statement called **`break`** that has the effect of immediately jumping out of the enclosing loop.

```javascript
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21
```

:warning: If you were to remove that break statement or you accidentally write an end condition that always produces true, your program would get stuck in an **`infinite loop`**. A program stuck in an infinite loop will never finish running, which is usually a bad thing.

* The `continue` keyword is similar to break, in that it influences the progress of a loop. The `continue` statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
  
[🔝](#toc)  

      
## Updating bindings succinctly

* Especially when looping, a program often needs to *update* a binding to hold a value based on that binding’s previous value.

``` counter = counter + 1; ```

JavaScript provides a shortcut for this:

``` counter += 1; ```

This allows us to shorten our counting example a little more.

```javascript
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
```

:exclamation: For counter += 1 and counter -= 1, there are even shorter equivalents: `counter++` and `counter--`.


  
[🔝](#toc)  

      
## Switch

It is not uncommon for code to look like this:
```javascript
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();
```
* There is a construct called `switch` that is intended to express such a “dispatch” in a more direct way.

```javascript
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```


  
[🔝](#toc)  

  
  
## Capitalization

* Binding names may not contain spaces, yet it is often helpful to use multiple words to clearly describe what the binding represents. These are pretty much your choices for writing a binding name with several words in it:

```
fuzzylittleturtle
fuzzy_little_turtle
FuzzyLittleTurtle
fuzzyLittleTurtle
```

* The first style can be hard to read. I rather like the look of the underscores, though that style is a little painful to type. 

* The standard JavaScript functions, and most JavaScript programmers, follow the bottom style—they capitalize every word except the first. 

* In a few cases, such as the Number function, the first letter of a binding is also capitalized. This was done to mark this function as a constructor.
  
[🔝](#toc)  

  
    
## Comments

Often, raw code does not convey all the information you want a program to convey to human readers, or it conveys it in such a cryptic way that people might not understand it. At other times, you might just want to include some related thoughts as part of your program. This is what `comments` are for.

* To write a single-line comment, you can use two slash characters (`//`) and then the comment text after it.

```javascript
let accountBalance = calculateBalance(account);
// It's a green hollow where a river sings
accountBalance.adjust();
// Madly catching white tatters in the grass.
let report = new Report();
// Where the sun on the proud mountain rings:
addToReport(accountBalance, report);
// It's a little valley, foaming like light in a glass.
```

* A section of text between `/*` and `*/` will be ignored in its entirety, regardless of whether it contains line breaks. This is useful for adding blocks of information about a file or a chunk of program.

```javascript
/*
  I first found this number scrawled on the back of an old notebook.
  Since then, it has often dropped by, showing up in phone numbers
  and the serial numbers of products that I've bought. It obviously
  likes me, so I've decided to keep it.
*/
const myNumber = 11213;
```
  
[🔝](#toc)  

    
## Summary

* You now know that a program is built out of statements, which themselves sometimes contain more statements. Statements tend to contain expressions, which themselves can be built out of smaller expressions.

* Putting statements after one another gives you a program that is executed from top to bottom. You can introduce disturbances in the flow of control by using conditional (if, else, and switch) and looping (while, do, and for) statements.

* Bindings can be used to file pieces of data under a name, and they are useful for tracking state in your program. The environment is the set of bindings that are defined. JavaScript systems always put a number of useful standard bindings into your environment.

* Functions are special values that encapsulate a piece of program. You can invoke them by writing functionName(argument1, argument2). Such a function call is an expression and may produce a value.
  
[🔝](#toc)  

    
## Exercises

:canada: 
1. Looping a triangle
* Write a loop that makes seven calls to console.log to output the following triangle:
```
#
##
###
####
#####
######
#######
```
:warning: Hints: It may be useful to know that you can find the length of a string by writing `.length ` after it.
```
let abc = "abc";
console.log(abc.length);
// → 3
```


2. FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

:warning: Hints: You'll have to use `%` modulo operator and `if/else/else if` statements

3. Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:
```
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
```
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.


:uzbekistan:
1. To'g'ri burchakli uchburchak
* `console.log` ni `loop` orqali 7 marta chaqirib quyidagi uchburchakni yasang:
```
#
##
###
####
#####
######
#######
```
:warning: Yordam: `string` ni uzunligini bilish uchun o'zgaruvchini ketidan `.length` deb yozish kerak. Masalan:
```javascript
let abc = "abc";
console.log(abc.length);
// → 3
```  

2. FizzBuzz

* `console.log` ga 1 dan 100 gacha bo'lgan sonlarni chiqaring, lekin 2 ta mustasno bor.
Birinchisi agar son 3 ga bo'linadigan bo'lsa, sonni o'rniga "Fizz" deb chiqaring
Ikkinchisi agar son 5 ga (3 ga emas) bo'linadigan bo'lsa, sonni o'rniga "Buzz" deb chiqaring.

* Bu ishlagandan keyingi qiladigan ishingiz, yana bitta mustasno qo'shasiz: ya'ni agar son 3 va 5 ga (ikkisiga) ham bo'linadigan bo'lsa o'sha sonni o'rniga "FizzBuzz" deb chiqaring.

* (Bu aslida intervyularda beriladigan savollardan biri bo'lib, agar yecha olsangiz, boshqa kandidatlardan hoziroq darajangiz ko'tarilgan bo'ladi :)

3. Shaxmat doskasi

* 8 ga 8 (8x8) grid ichida `#` simvolini shaxmat doskasi singari joylashtiramiz. Ya'ni qora ranglar `#` orqali oq ranglar esa "  " (bo'shliq) orqali tasvirlanadi.

* `console.log` ga quyidagi ko'rinishdagi `string` lar chiqishi kerak

```javascript
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
```

* Buni qilib bo'lganingizdan keyin, faqat 8x8 emas, balki istalgan kattalikdagi shaxmat doskasini tasvirlash imkoni bo'lsin. Buning uchun `size` degan o'zgaruvchini qiymatini o'zgartirish havola bo'lishi kerak.




[🔝](#toc)  

  
