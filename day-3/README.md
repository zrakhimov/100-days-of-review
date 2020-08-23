[Go to ToC](../README.md)

# Day 3 - CSS3

Topics:

* []


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
// global.css
h1 {
  color: red
}
```
