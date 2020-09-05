[Go to ToC](../README.md)

# CSS Flexbox

## ToC
* [Using Flexbox](#using-flexbox)
* [Flex Direction ](#flex-direction)
* [Justify Content](#justify-content)
* [Align Items](#align-items)
* [ ](#)
* [](#)
* [](#)

### Using Flexbox

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

![flex direction](flex-direction.png)

[🔝](#toc)  
  
### Justify Content

`justify-content:` defines the alignment along the **main** axis, through the items. 
```css
#box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
```  

* `flex-start` - pushes items to the left
* `flex-end` - pushes items to the right
* `space-between` - aligns items to the center with extra space in between. First and Last items are pushed to the edge of left and right respectively
* `space-around` - similar to `space-between`, but first and last items are NOT pushed to the edge, but have some space.
* `space-evenly` - distributes equal space between items.

![justify content](justify-content.png)


  
[🔝](#toc)  

### Align Items

![align items](align-items.png)

  
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

  

  
  
