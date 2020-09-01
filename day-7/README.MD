[Go to ToC](../README.md)

# Visual Design with CSS - P4

## ToC
* [Position](#)
* [Relative Position](#)
* [Absolute Position](#)
* [Fixed Position](#)
* [Sticky Position](#)
* [Float](#)
* [z-index](#)

### Position

It's possible to move elements by using `position` property.   
After declaring the position type. We can give `top`, `right`, `bottom`, `left` properties in to actually move it.

It 3 values most commonly used
* `relative`  
* `absolute`
* `fixed`
* `sticky` - CSS3

### Relative Position


With `position: relative`, element will be positioned relative to it's **original position**

```css 
.box {
  width: 200px;
  height: 200px;
  background: red;
  position: relative;
  top: 10px;
  left: 10px;
```

:warning: Element will **remain** in normal document flow


[🔝](#toc)  
  
### Absolute Position

With `position: absolute`, element will be positioned relative to the **closest *positioned* parent**. If it doesn't find positioned element, `<body>` will end up being the parent, and will position relative to `<body>`

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 10px;
  bottom: 10px;
}
```

:warning: Element will be **removed** from normal document flow

  
[🔝](#toc)  

### Fixed Position

With `position: fixed`, element will be positioned relative to **browser window**.

```css
#navbar {
  position: fixed;
  top:0;
  left:0;
}
```
:warning: Element will be **removed** from normal document flow
  
[🔝](#toc)  

### Sticky Position

The element is positioned according to the normal flow of the document, and then offset relative to its nearest `scrolling ancestor` and `containing block`

```css
#item {
    position:sticky;
    top: 0.25rem;
}
```
:warning: Element will **remain** in normal document flow **until parent element is not out of browser's view**.
  
[🔝](#toc)  

### Float

Another positioning tool we can use which is similar to `absolute`, but simpler, is `float`.
It pushes the element to either right or left of a **containing parent**.
It has the values of 
* `left`
* `right`

Usually there's a `width` that should be given to determine how much space the element will occupy

```css

  #left {
      float:right;
      width: 50%;
    }
    #right {
      float: left;
      width: 40%;
    }
```

:warning: Element will be **removed** from normal document flow

[🔝](#toc)    
  
  
### `z-index`

If positioned elements overlap, we can choose which one will be in front or in the back by using `z-index` order.
 The higher index number means it will show in the front.


```css
.first {
    background-color: red;
    position: absolute;
    z-index: 2;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
```
:warning: `z-index` must be an integer, not a decimal.
  
[🔝](#toc)  

  
  
  
