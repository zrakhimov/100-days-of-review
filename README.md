# :100: Days Of Review
 Repository contains review of forgotten stuff  

## Table of Contents

[Day 1 - Markup basics](#day-1---markup-basics)  
- [Headings](#headings)
- [Links](#links)
- [Styling](#styling)
- [New Line](#new-line)
- [Quoting Code](#quoting-code)
- [Section Links](#section-links)
- [Attach GIF](#attach-gif)
- [Inserting Emoji](#insert-emoji)
- [Fun Fact](#fun-fact)

[Day 2 - HTML](#day-2---html5) 
- [Headings](#headings)
- [Paragraph](#paragraph)
- [Comment](#comment)
- [HTML5 Elements](#html5-elements)
- [Images](#images)
- [Links](#links-1)


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

![Alt Text](assets/SectionLink.gif)


### Attach GIF

OK, how did I do that? Simple: just use `![Alt Text](link_to_gif)`. Easy!  


### Insert Emoji

To type emoji into your markup, type: `:EMOJICODE:`. List of emoji codes [here](https://gist.github.com/rxaviers/7360908) :white_check_mark:  

### Fun Fact

Markup doesn't support text colour!

## Day 2 - HTML5

Notes [from freeCodeCamp](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/)

HTML is a markup language which describes the structure of a web page. It uses special syntax which uses `<>` opening and closing tags.

```html
<h1>This is h1 heading</h1>
<p> This is a paragraph</p>
<ol>
 <li>First item in the numbered list</li>
 <li>Second item </li>
</ol>
```
Becomes:

> ## This is h1 heading
> This is a paraph
> 1. First item in the numbered list
> 2. Second item

### Headings

There are 6 levels of heading in html: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`

```html
<h1>This is h1 </h1>
<h2>This is h2 </h2>
<h3>This is h3 </h3>
<h4>This is h4 </h4>
<h5>This is h5 </h5>
<h6>This is h6 </h6>
```

Becomes:

> # This is h1
> ## This is h2
> ### This is h3
> #### This is h4
> ##### This is h5
> ###### This is h6

### Paragraph

`<p>` is short for 'paragraph' and preferred text format on websites

```html
<p> I'm a p tag </p>
```
Becomes

> I'm a p tag

### Comment

Comments don't appear on the page when viewed by the browser, and it's used to leave notes on the development process

```html
<!-- This is a comment -->
```

### HTML5 elements

The following html5 tags, acts same as the `<div>` but helps to identify structure of the page. Also helps with SEO (Search Engine Optimization)


* `<main>` - Main body of the content
* `<header>` - Contains header elements such as navigation bar and it's elements
* `<footer>` - Might contain summarized links and website map
* `<nav>` - Used inside `<header>` to define the navigation
* `<video>` - Used to embedd video on the page
* `<article>` - Large block of text can be included within this tag
* `<section>` - Logically divide your content using section tag

For example, let's see how would you use `<main>` tag:
```html
<main>
 <h1>Hello World</h1>
 <p> Hello Paragraph</p>
</main>
```
### Images

You can add images to your web page using `img` element and point to specific image using `src` _attribute_

```html
<img src="https://i.picsum.photos/id/321/200/200.jpg?hmac=V8qQPhFl_8KjI8JgGI74LQepgBOnxdXOuZmBclxHU90">
```
Becomes
> ![picture of a city](https://i.picsum.photos/id/321/200/200.jpg?hmac=V8qQPhFl_8KjI8JgGI74LQepgBOnxdXOuZmBclxHU90)

⚠️ Note that `img` elements are self-closing  

All `img` elements must have an `alt` _attribute_. It's used in text-readers for accessibility purposes

```html

<img src="https://bit.ly/fcc-relaxing-cat" alt="photo of a cat">

```

Becomes

> ![photo of a cat](https://bit.ly/fcc-relaxing-cat)


### Links

To link to another page from the current page we use an _anchor_ tag `<a></a>`. It has an _attribute_ `href` where we need to put the link to the page

```html

<a href="https://google.com">Take me to Google</a>

```

Becomes

> [Take me to Google](https://google.com)

⚠️ Note: when you click on the hyperlink, it doesn't open it on a new tab. In order to open it on a new tab, use `_target` attribute by setting it to `blank`

```html
<a href="https://google.com" _target="blank">Take me to Google</a>
```

To make the link not to point anywhere just include set `href` to `#`  

To turn an Image into a Link, wrap an `a`nchor tag around `img` tag as shown below

```html
<a href="https://bit.ly/fcc-running-cats"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera."></a>
```
Becomes:

> ![Three kittens running towards the camera](https://bit.ly/fcc-running-cats)
