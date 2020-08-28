# Visual Design with CSS - P1

Visual Design in web development includes typography, color theory, graphics, animation and layout.
However, these notes provide what tools developers use to create their own visual design.

## ToC
[](#)  


### `text-align`

Text is a large part of a web page. CSS provides several options to _align_ the text with `text-align` property

* `text-align: justify;` causes all lines of text except the last line to meet the left and right edges of the line box.

* `text-align: center;` centers the text

* `text-align: right;` right-aligns the text

* `text-align: left;` (the default) left-aligns the text.

```css
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
```  

  
[🔝](#toc)  
  

### `width`  

We can edit the width of an element with `width` property. Values can be :
  * `px`
  * `%`
  * `em`
  
```css

  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }

```
[🔝](#toc)  
  
### `height`

In addition to width, you also can adjust the height of an element using `height` property.
Same units apply:

  * `px`
  * `%`
  * `em`
  
```css
  h4 {
    text-align: center;
    height: 25px;
  }
```  

[🔝](#toc)  
  
### `<strong>` vs `font-weight: bold`  

HTML represents meaning; CSS represents appearance. How you mark up text in a document is not determined by how that text appears on screen, but simply what it means. As another example, some other HTML elements, like headings, are styled font-weight: bold by default, but they are marked up using <h1>–<h6>, not <strong> or <b>  
  
HTML5 `<strong>` - is often used to draw attention and happened to have `font-weight: bold` by default. You can achieve the same result by doing `<b>`, but it's often discouraged.

```html
  <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University.</strong></p>
```

Becomes
>   <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University.</strong></p>

  
[🔝](#toc)  
  
### `<u></u>` vs `text-decoration: underline;`

To underline text, you can use the u tag. This is often used to signify that a section of text is important, or something to remember. With the u tag, the browser applies the CSS of text-decoration: underline; to the element.  

```html
 <p>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</p>
```
Becomes: 

>  <p>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</p>

:warning: Try to avoid using the u tag when it could be confused for a link. Anchor tags also have a default underlined formatting.
  
[🔝](#toc)  
  
### `<em></em>`  
  
[🔝](#toc)  
  
### `<s>`

  
[🔝](#toc)  
  
### `<hr>`

  
[🔝](#toc)  
  
### `background-color` with `rgba()`

  
[🔝](#toc)  
  
### `font-size` of `<h>` elements

  
[🔝](#toc)  
  
