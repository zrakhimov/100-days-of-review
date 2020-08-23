[Go to ToC](../README.md)

# Day 3 - CSS3

Topics:

* [CSS Intro](#css-intro)


### CSS Intro

* CSS - Cascading Style Sheets  

* ⚠️ Case Sensitive  

CSS allows to control major styling of your page:
* color
* fonts
* spacing
* sizing
* decorations
* transitions
* layout
* and more

There are 3 ways to include CSS code:

1. *Inline* using `style` attribute in html file
```html
<h1 style="color: red">Hello World!</h1>
```
2. *Embedded* using `<style>` element in html file 
```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML darsi</title>
        <style>
            h1 {
                color: red;
            } 
        </style>
    </head>
    <body>
    <!-- ......... -->
```
3. *External* using separate css file and link in html file

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="global.css">
  </head>
  <body>
  <!-- ......... -->
```
```css
h1 {
  color: red
}
```  
[🔝](#day-3---css3)  

### Change Color Of Text

This can be done by changing `style` of the element and using property  `color` as shown below:

```html
<h1 style="color: red;">Hello World</h1>  
```

⚠️ Should end with `;`  

[🔝](#day-3---css3) 

### CSS Element Selectors

The above example was an inline and not a best way to write CSS.  

We can use embedded style with `<style>` element within html  

Inside this `<style>` block we should use `selector` to *select* which element we would like to style.  

Since we want to style `<h1>` element, we would specify an element in this format

```html
<style>
    h1 {
        color: red;
    }
</style>
```

⚠️  After choosing a selector to style, we should use `{` , `}` and include all the properties we would like to enter by ending each one with `;`  

[🔝](#day-3---css3)  

### CSS Class Selector

Besides elements, you can pick and choose a class to style. Whichever element that has that class will be changed once you change CSS properties.  

```html
<style>
   .red-text {
        color: red;
    }
</style>
<body>
    <h1 class="red-text">Hello World</h1>
    <!-- ...... -->
```
⚠️ Notice how we specified a class selector with a `.` in front of it? That's how classes are *selected* in CSS  

[🔝](#day-3---css3)  

### Style Multiple Elements With CSS Class

Classes allows you to use the same style to all elements that are part of that class

```html
```html
<style>
   .red-text {
        color: red;
    }
</style>
<body>
    <h1 class="red-text">Hello World</h1>
    <p class="red-text">Lorem Ipsum...</p>
    <!-- ...... -->
```  

`h1` and `p` on the above example will have `red` text becuase they are part of the same class  

[🔝](#day-3---css3)  

### Font-Size

Font size is controlled by `font-size` property and values can be given in `px` (pixels)

```html
<style>
    h1 {
        font-size: 30px;
    }
</style>
```  
[🔝](#day-3---css3)  

### Font-Family

To choose which font a text should use, we should specify `font-family` property.

```html
<style>
    h1 {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
```  
⚠️ It is possible to give multiple fonts in case the first one is not present on user's machine. So always include "web safe" fonts as the last option since it will most likely be present on user's machien.  

[🔝](#day-3---css3)  

### Import Google Font

Google Fonts has a free library of fonts we can use in our web page. Here's the code how to do this:
* Include a reference to the web api on google's server
```html
<!-- We want to get a font named "Roboto" -->
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
```

* Place the above link within `<head>` tags. Now `Roboto` font is available for us to use in our CSS.

```css
font-family: FAMILY_NAME, GENERIC_NAME
```
* FAMILY_NAME will render our `Roboto` font. GENERIC_NAME is a fall back font in case `Roboto` doesn't render  

[🔝](#day-3---css3)  
