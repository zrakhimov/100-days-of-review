# 100 Days Of Review
 Repository contains review of forgotten stuff  

## Table of Contents

[Day 1 - Markup basics](#day-1---markup-basics)  

<hr>

## Day 1 - Markup basics

Great documentation of formatting syntax at [Github Docs](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)  

### Headings

Headings are just like `h1`, `h2` .. `h6` in `html`. # means `h1` ###### means `h6`.

```
# The largest heading
## The second largest heading
###### The smallest heading
```  

### Links

`This [hyperlink] points to Github Docs [https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax#links)`

### Styling 

There are 3 styling that are popular: **Bold**, *Italic* and ~~Strikethrough~~

```
**Bold**
*Italic* 
~~ Strikethrough ~~
```

Also these 3 can be combined. For example:  
* **Bold _and nested_ Italic**  
* ***Bold and Italic***
```
**Bold _and nested_ Italic**
***Bold and Italic***
```  

### New Line

Sometimes you can see that your line didn't start with a new line, even though you wrote your sentence in a new line in the editor.  
To fix this, ensure each line ends with 2 spaces. See stackoverflow [answer](https://stackoverflow.com/questions/24575680/new-lines-inside-paragraph-in-readme-md)
```
This is first line __
This is second line __
```
where _ is a blank space  

### Quoting Code

Most often, a coder needs to be able to display code on the documentation. Here's how to do it:  
```
1. `Inline Code`
2. ```/* Block of Code */ console.log("Hello World");```
3. ```javascript /*Syntax Highlight*/ console.log("Hello World");```
```  
### Section Links

I didn't find [GitHub Doc](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax#section-links)'s explanation that much useful. So basically 
section link acts the same as `<a href="#some-id">Take me somewhere</a>` where you need to link to a particular place in your document. First you have to find out the `id` of your content. Usually when you hover over a "heading" it will show you the `id` of the content. Simply copy it and paste it in the paranthesis



