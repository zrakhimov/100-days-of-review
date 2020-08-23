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

###
