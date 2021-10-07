[Go to ToC](../README.md)

# Visual Design with CSS - P3

## ToC
* [Box Shadow](#box-shadow)  
* [Uppercase, Lowercase, Capitalize](#uppercase-lowercase-capitalize)
* [Line Height](#line-height)
* [Hover State](#hover-state)

### Box Shadow

`box-shadow` property adds one or more shadows to an element.

Following `:` takes the values
* `offset-x` - [+10px , shadow moves right horizontally]  
             - [-10px, shadow moves left horizontally]  
* `offset-y` - [+10px, shadow moves down vertically]  
             - [-10px, shadow moves up vertically]
* `blur-radius` - [OPTIONAL] 
* `spread-radius` - [OPTIONAL]
* `color` - best with `rgba()`
* use `,` to give multiple shadows

```css
.fullCard {
  box-shadow: 0 20px 20px rgba (0,0,0, 0.5), 0 6px 6px rgba(0,0,0,0.23);
}
```


[🔝](#toc)  
  
### Uppercase, Lowercase & Capitalize

`text-transform` property is used to make text all uppercase, or all lowercase, or capitalize. THe following `values`  are used:

* `lowercase` - "hello world"
* `uppercase` - "HELLO WORLD"
* `capitalize` - "Hello World"

```css
h4 {
  text-transform: uppercase;
}
```
  
[🔝](#toc)  

### Line Height

You can change spacing between text vertically by using `line-height` property in CSS.

```css
p {
  line-height: 25px;
}
```
  
[🔝](#toc)  

### Hover State 

A pseudo-class is a keyword that can be added to selectors, in order to select a specific state of the element.

For example, you can style an element when you hover over it by using pseudo class selector `:hover`. 

```css
a:hover {
  color: red;
}
```

[🔝](#toc)  

  
  
  
