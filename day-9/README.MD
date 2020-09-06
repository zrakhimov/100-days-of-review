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
* `row` - [DEFAULT]
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
* For `flex-direction: row` the **axis** is **hozirontal** 
* For `flex-direction: column` the **axis** is **vertical**

```css
#box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
```  

* `flex-start` - pushes items to the left [DEFAULT]
* `flex-end` - pushes items to the right
* `space-between` - aligns items to the center with extra space in between. First and Last items are pushed to the edge of left and right respectively
* `space-around` - similar to `space-between`, but first and last items are NOT pushed to the edge, but have some space.
* `space-evenly` - distributes equal space between items.

![justify content](justify-content.png)


  
[🔝](#toc)  

### Align Items
  
`align-items: ` defines alignment along the **cross** axis.  
For a row, it tells CSS how to push the items in the entire row up and down  
For a column, how to push all the items left or right within a container.
  
  
  
![align items](align-items.png)

  
[🔝](#toc)  

### Flex Wrap

We also can split items in a row. This means extra items move into a new row or column. 
The break point of where the wrapping happens depends on teh size of the items and teh size of the container.

```css
#box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;  
}
```

![flex wrap](flex-wrap.png)
  
[🔝](#toc)  

### Flex Shrink

So far, all the properties we discussed goes to the container/parent of the items. We have few other properties that goes to the items themselves.. 

First, let's see what `flex-shrink` does: Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.

It takes numbers as values (default = 1). Where `x` is how many times the item is going to shrink compared to the other item.

```css
#box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
}
```


[🔝](#toc)    
  
  
### Flex Grow


  
[🔝](#toc)  

  
  
### Flex Basis


  
[🔝](#toc)  

  
  
### Align Self


  
[🔝](#toc)  

  

  
  
