[Go to ToC](../README.md)

# Visual Design with CSS - P4

## ToC
* [Position](#)
* [Relative Position](#)
* [Absolute Position](#)
* [Fixed Position](#)
* [Float](#)
* [z-index](#)

### Position

It's possible to move elements by using `position` property.   
After declaring the position type. We can give `top`, `right`, `bottom`, `left` properties in to actually move it.

It 3 values most commonly used
* `relative`  
* `absolute`
* `fixed`

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

### Float

Another positioning tool we can use which is similar to `absolute`, but simpler, is `float`.
It pushes the element to either right or left of a **containing parent**.
It has the values of 
* `left`
* `right`

```css

.section1 {
  float: left;
}

.section2 {
  float: right;
 }
```

:warning: Element will be **removed** from normal document flow

[🔝](#toc)    
  
  
### 


  
[🔝](#toc)  

  
  
  
