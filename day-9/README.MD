[Go to ToC](../README.md)

# CSS Flexbox

## ToC
* [What is Flexbox Layout](#what-is-flexbox-layout)
* [ ](#)
* [ ](#)
* [ ](#)
* [ ](#)
* [](#)
* [](#)

### Positioning In Flex

* Came out on October 2017, provides an efficient way to layout, align and distribute space among items in a container. 
* To start using `flex` we declare `display: flex` inside a container

```css
.box-container {
  display: flex;
}
```
:warning: `flex` is more appropriate for smaller size components, whereas `grid` is intended for larger scale layouts.

[🔝](#toc)  
  

### Flex Direction

* Once we declare the container as `flex`, we can align any children into *rows* and *columns* by using `flex-direction` property in **container CSS**.

Values are:
* `row` - by default
* `row-reverse` 
* `column`
* `column-reverse`

```css
#box-container {
    display: flex;
    height: 500px;
    flex-direction: row-reverse;
}
```

[🔝](#toc)  
  
### Justify Content

This defines the alignment along the **main** axis, through the items. 
It has the following values:
![justify content](justify-content.png)



  
[🔝](#toc)  

### Align Items


  
[🔝](#toc)  

### Flex Wrap


  
[🔝](#toc)  

### Flex Shrink



[🔝](#toc)    
  
  
### Flex Grow


  
[🔝](#toc)  

  
  
### Flex Basis


  
[🔝](#toc)  

  
  
### Align Self


  
[🔝](#toc)  

  

  
  
