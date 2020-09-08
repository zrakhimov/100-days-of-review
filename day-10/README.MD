[Go to ToC](../README.md)

# CSS Grid

Grid helps to build complex web layouts. It turns HTML into a grid layout where you have rows and columns to place your items in.

## ToC
* [Display Grid](#display-grid)  
* [Grid Template Columns](#grid-template-columns)  
* [Grid Template Rows](#grid-template-rows)  
* [Grid Units](#grid-units)  
* [Grid Gap](#grid-gap)  
* [Grid Column](#grid-column)  
* [Grid Row](#grid-column)  
* [Justify Self](#justify-self)  
* [Align Self](#align-self)  
* [Justify Items](#justify-items)  
* [Align Items](#align-items)  
* [Grid Template Area](#grid-template-area)  
* [Grid Area](#grid-area)  
* [Repeat](#repeat)  
* [Minmax](#minmax)  
* [Autofill](#autofill)  
* [Autofit](#autofit)  


### Display Grid  

To turn the container into a Grid layout, simply apply `display:grid;` css line to container element

```css3
.container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
   
    display:grid;
    
  }
```  
  
[🔝](#toc)  
  

### Grid Template Columns

Simply declaring `grid` doesn't change anything, but will give you the ability to create columns and rows.

To create columns, we use `grid-template-columns` on the container element as demonstrated:

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```
Total # values given determines # of **columns** and each value indicates how **wide** the column is. Example above, creates 2 columns with `width: 50px` each.  


[🔝](#toc)  
  
### Grid Template Rows

Previous example sets the rows automatically as needed. We can specify how many rows we need by using `grid-template-rows`. Declared same as `grid-template-column`:

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 50px 50px;
}
```

Total # values given determines # of **rows** and each value indicates how **tall** the row is. Example above, creates rows  with `height: 50px` each.  
  
[🔝](#toc)  

### Grid Units
  
  
  
[🔝](#toc)  

###


  
[🔝](#toc)  

### 

