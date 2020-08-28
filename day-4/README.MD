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

```html
<style>
  h4 {
    text-align: center;
  }
  p {

  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```  

  
[🔝](#toc)  
  

### `width`  

We can edit the width of an element with `width` property. Values can be :
  * `px`
  * `%`
  * `em`
  
```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>

```
[🔝](#toc)  
  
### `height`
  
[🔝](#toc)  
  
### `strong`
  
[🔝](#toc)  
  
### `<u></u>`
  
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
  
