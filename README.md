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
- [Unordered List](#unordered-list)
- [Ordered LIst](#ordered-list)
- [Form Element](#form-element)
- [Input Field - Text](#input-field---text)
- [Input Field - Radio](#input-field---radio)
- [Input Field - Checkmark](#input-field---radio)
- [Select Field - Single](#select-field---single)
- [Select Field - Multiple](#select-field---multiple)
- [Table](#table)
- [Submit Button](#submit-button)
- [Container Element](#container-element)
- [!DOCTYPE](#doctype)
- [Head and Body](#head-and-body)  

[Day 3 - CSS Basics](day-3/README.md)  
[Day 4 - Visual Design - Part 1](day-4/README.MD)

## Day 1 - Markup basics

Great documentation of formatting syntax at [Github Docs](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)  

### Headings

Headings are just like `h1`, `h2` .. `h6` in `html`. # means `h1` ###### means `h6`.

```
# The largest heading
## The second largest heading
###### The smallest heading
```  
[🔝](#table-of-contents)

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
[🔝](#table-of-contents)  

### New Line

Sometimes you can see that your line didn't start with a new line, even though you wrote your sentence in a new line in the editor.  
To fix this, ensure each line ends with 2 spaces. See stackoverflow [answer](https://stackoverflow.com/questions/24575680/new-lines-inside-paragraph-in-readme-md)
```
This is first line __
This is second line __
```
where _ is a blank space  

[🔝](#table-of-contents)

### Quoting Code

Most often, a coder needs to be able to display code on the documentation. Here's how to do it:  
```
1. `Inline Code`
2. ```/* Block of Code */ console.log("Hello World");```
3. ```javascript /*Syntax Highlight*/ console.log("Hello World");```
```  
[🔝](#table-of-contents)

### Section Links

I didn't find [GitHub Doc](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax#section-links)'s explanation that much useful. So basically 
section link acts the same as `<a href="#some-id">Take me somewhere</a>` where you need to link to a particular place in your document. First you have to find out the `id` of your content. Usually when you hover over a "heading" it will show you the `id` of the content. Simply copy it and paste it in the paranthesis

![Alt Text](assets/SectionLink.gif)

### Attach GIF

OK, how did I do that? Simple: just use `![Alt Text](link_to_gif)`. Easy!  


### Insert Emoji

To type emoji into your markup, type: `:EMOJICODE:`. List of emoji codes [here](https://gist.github.com/rxaviers/7360908) :white_check_mark:  
[🔝](#table-of-contents)
### Fun Fact

Markup doesn't support text colour!  
[🔝](#table-of-contents)
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
[🔝](#table-of-contents)

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
[🔝](#table-of-contents)
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
[🔝](#table-of-contents)
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
[🔝](#table-of-contents)
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

[🔝](#table-of-contents)

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

[🔝](#table-of-contents)  

### Unordered List

Unordered lists start with `<ul>` and within this tag, has all the line items inside `<li>` tag. Finally close the `</ul>` tag

```html
<ul>
 <li>First</li>
 <li>Second</li>
 <li>Third</li>
</ul>
```
[🔝](#table-of-contents)
### Ordered List

Ordered lists start with `<ol>` and within this tag, has all the line items inside `<li>` tag. Finally close the `</ol>` tag

```html
<ol>
 <li>First</li>
 <li>Second</li>
 <li>Third</li>
</ol>
```
[🔝](#table-of-contents)

### Form Element

`<form></form>` element let's you submit data to a server. You just have to specify `action` attribute to the location you want to submit that data. 

```html
<form action="/url-where-you-want-to-submit-data">
</form>
```

### Input Field - Text

`input` elements are a convenient way to get input from the user.  
To create an input text field, use `<input>` self closing tag with attribute `type="text"`


```html
<input type="text">
```

⚠️ If you want to display a text in the input field before hand, use `placeholder` attribute and set your text

```html
<input type="text" placeholder="Enter your name here">
```

⚠️ You can also `require` the field to be mandatory. Simply add this attribute to your input field

```html
<input type="text" placeholder="Enter your name here" required>
```
[🔝](#table-of-contents)  

### Input Field - Radio

You can use radio buttons where you want the user to select __only one option__ from pre-defined list. Radio buttons are a type of `input`.

```html
<input type="radio">

```

* `label` is used to give a text to the button. 

```html
<input type="radio">
<label>Option 1</label>
```

*  `for` attribute in <label> is used as a best practice. It matches `id` attribute of <input>
 
```html
<input id="option1" type="radio">
<label for="option1">Option 1</label>
```

* `name` attribute on the <input> element must be the same if you have multiple radio buttons

```html
<input id="option1" type="radio" name="options">
<label for="option1">Option 1</label>
<input id="option2" type="radio" name="options">
<label for="option2">Option 2</label>
<input id="option3" type="radio" name="options">
<label for="option3">Option 3</label>
```

* `value` - When a form gets submitted, the data is sent to the server and includes entries for the options selected. Inputs of type `radio` and `checkbox` report their values from the `value` attribute.
```html
<input id="option1" type="radio" name="options" value="option1">
<label for="option1">Option 1</label>
<input id="option2" type="radio" name="options" value="option2">
<label for="option2">Option 2</label>
<input id="option3" type="radio" name="options" value="option3">
<label for="option3">Option 3</label>
```
* `checked` - you can set a checkbox or radio button to be checked by default using   the checked attribute 

```html
<input type="radio" name="test-name" checked>
```

⚠️ If you omit the `value` attribute, the submitted form data uses the default value, which is `on`
⚠️ Radio buttons are __inline__ elements, so they stack up horizontally. You may want to include <br> after each checkbox or radio button  

[🔝](#table-of-contents)

### Input Field - Checkbox

Checkboxes are used when you want the user to choose __multiple__ options from pre-defined list.

You can create checkboxes with `<input type="checkbox">` syntax.

Just like radio buttons, we can wrap each element within it's own `label`.

```html
<label for="1">
 <input id="1" type="checkbox" name="selections"> Checkbox 1
</label>
<label for="2">
 <input id="2" type="checkbox" name="selections"> Checkbox 2
</label>
<label for="3">
 <input id="3" type="checkbox" name="selections"> Checkbox 3
</label>
```
⚠️ If you omit the `value` attribute, the submitted form data uses the default value, which is `on`
⚠️ Attributes that are added to radio buttons apply here too for checkboxes, such as `value` , `checked`, `name` , `id`, `for` etc  

[🔝](#table-of-contents)  

### Select Field - Single

`<select>` tag is used to create a dropdown and multiple selection list in a form  
`<option>` tag is used within `<select>` for individual list item

```html
<label for="dropwdown_id"> Options: </label>
<select id="dropdown_id" name="dropdown_name">
 <option value="option1">Option 1</option>
 <option value="option2">Option 2</option>
 <option value="option3">Option 3</option>
</select>
```

⚠️ The `name` attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the drop-down list will be submitted).
⚠️ The `id` attribute is needed to associate the drop-down list with a label.  

[🔝](#table-of-contents)   

### Select Field - Multiple

Simply add `multiple` attribute at the end of `select` tag to be able to select multiple options

```html
 <label for="cars">Choose a car:</label>
  <select name="cars" id="cars" multiple>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
```  

[🔝](#table-of-contents)   

### Table

* The `<table>` tag defines an HTML table.

* Includes `<thead>` which is the header part of the table and `<tbody>` where the rows of data will be displayed

* Each table row is defined with a `<tr>` tag. Each table header is defined with a `<th>` tag. Each table data/cell is defined with a `<td>` tag.

* By default, the text in `<th>` elements are bold and centered.

* By default, the text in `<td>` elements are regular and left-aligned.

```html
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>First</th>
      <th>Last</th>
      <th>Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```  
[🔝](#table-of-contents)  

### Submit Button

Usually you want to have a button at the end of your form to submit it to the server. You can do that by creating the `button` element with `type="submit"`

```html
<button type="submit">Submit</button>
```
[🔝](#table-of-contents)


### Container Element

The `div` element, also known as a division element, is a general purpose container for other elements.

The `div`element is probably the most commonly used HTML element of all.  

[🔝](#table-of-contents)  

### DOCTYPE

`<!DOCTYPE html>` is placed first thing in the html document. This will let the browser that is rendering this html know that HTML5 should be used . Most major browsers support the latest specification, which is HTML5. However, older web pages may use previous version of the language

All the html code should be within `<html>` tags

```html
<!DOCYPE html>
<html>
 <!-- Your code here -->
</html>
```
[🔝](#table-of-contents)  

### Head and Body 

`<head>` and `<body>` must be also present within `<html>` tags.  
`<head>` - contains all information about the page  
`<body>` - contains all the content of the page which user will see  

Overall, the boilerplate for html document take the form:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
[🔝](#table-of-contents)



