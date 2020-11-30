[Go to ToC](../README.md)

# Higher Order Functions

## ToC
* [Intro](#intro)
* [Abstraction](#abstraction)
* [ ](#)
* [ ](#)
* [ ](#)
* [](#)
* [](#)

### Intro

* As you build the program, it becomes bigger and bigger. Size almost always bring in complexity and complexity confuses programmers. Confused programmers in turn introduce  bugs and in a large program, it makes even harder to find these bugs. 
* Let's introduce an example to see what I mean

```javascript
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
```

vs

```javascript

console.log(sum(range(1, 10)));

```

* Which one is more likely to contain a bug? Which one is bigger in size?
* Sizewise 2nd example might be even bigger when you include the definitions of `sum()` and `range()`, but 2nd example is the most easy to understand and correct way to program.



[🔝](#toc)  
  

### Abstraction

* That's why programmers and software architects came up with **abstractions** like Object Oriented Programming or Functional Programming to actually deal with these complexity by dividing the programs into smaller pieces. 

* Abstractions hide details and give us the ability to talk about problems at a **higher** (or more abstract) level.

* Plain functions, as we’ve seen them so far, are a good way to build abstractions. But sometimes they fall short.

* Sometimes we want to do something N times. For that we use `for` loop. 

```javascript

for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

* Can we abstract “doing something N times” as a function? Well, it’s easy to write a function that calls console.log N times.

```javascript

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

```

* But what if we want to do something other than logging the numbers? Since “doing something” can be represented as a function and functions are just values, we can pass our action as a function value.

```javascript
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// → 0
// → 1
// → 2

```



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

  
  
  
