[Go to ToC](../README.md)

# Responsive Web Design

## ToC
* [Viewport](#)
* [Media Queries](#)
* [Responsive Image ](#)
* [Responsive Text](#)

### Viewport

Many people today use mobile devices to view a web page and we have to often optimize our web page to be displayed properly on those screens. One way is to use **viewport**. The viewport is the part of the screen that is actually visible to the user at any given time.

* One simple way to make your website mobile friendl**ier**, is to add this line into `<head>` tags.

```html

<meta name="viewport" content="width=device-width, initial-scale=1.0">

```
  
  
[🔝](#toc)  
  
### Media Queries

Another way we can deal with different devices is through media queries by using `@media` in css.

The following options are available

* `min-width`
* `max-width`
* `min-height`
* `max-height

```css

@media (min-width: 600px) {
    body {
        background-color: red;
    }
}

@media (max-width: 599px) {
  body {
      background-color: blue;
  }
}

```

```css

@media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
  @media(min-height: 800px) {
    p {
      font-size: 20px;
    }
  }
```

[🔝](#toc)  
  
### Responsive Image

It's very simple: simply give an image of `max-width: 100%` and `height: auto` to make sure image is in it's original ratio.

```css 
img {
  max-width: 100%;
  height: auto;
}
```
:warning: To make sure your image doesn't look pixelated on "Retina" or high density pixel screens, define image's `height` and `width` half of the original file
  
[🔝](#toc)  

### Responsive Text

Instead of `em` or `px` we can also use viewport units. 

* `vw` (viewport width): `10vw` would be 10% of the viewport's width.
* `vh` (viewport height): `3vh` would be 3% of the viewport's height.
* `vmin` (viewport minimum): `70vmin` would be 70% of the viewport's smaller dimension (height or width).
* `vmax` (viewport maximum): `100vmax` would be 100% of the viewport's bigger dimension (height or width).

They are like `%` - but relative to viewport of the device, instead of container

```css
<style>
  h2 {
    width: 80vw;
  }
  p {
    width: 75vw;
  }
</style>
```





  
[🔝](#toc)  

### 


  
[🔝](#toc)  

###




[🔝](#toc)    
  
  
### 


[🔝](#toc)  

  
  
  
