[Go to ToC](../README.md)

# JavaScript and DOM

## ToC
* [From HTML to the DOM](#from-html-to-the-dom)
* [Finding elements in the DOM with JavaScript](#finding-elements-in-the-dom-with-javascript)
* [Creating elements and Modifying the DOM with JavaScript](#creating-elements-and-modifying-the-dom-with-javascript)
* [Inspecting, Modifying a DOM element with JavaScript](#inspecting-modifying-a-dom-element-with-javascript)
* [Events](#events)
* [Common Events](#common-events)
* [Timers](#timers)

###  From HTML to the DOM

Web pages rely on HTML for their initial structure and content.  We write web pages using HTML,
and then use web browsers to parse and render that HTML into a living (i.e., modifiable at runtime)
tree structure.  Consider the following HTML web page:

The DOM Tree is a living version of our HTML.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>This is a Document!</title>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>Welcome!</h1>
        <p>This is a paragraph with a <a href="index.html">link</a> in it.</p>
        <ul>
            <li>first item</li>
            <li>second item</li>
            <li>third item</li>
        </ul>
    </body>
</html>
```

The browser will parse and render this into a tree of nodes, the [DOM Tree](https://en.wikipedia.org/wiki/Document_Object_Model):

![DOM Tree for our HTML](images/dom-tree.png)


* The DOM Tree is made up of **DOM Nodes**, which represent all aspects of our document, from elements to attributes and comments. We’ll refer to nodes and elements interchangeably, because all elements are nodes in the tree. However, there are also other types of nodes, for example: text nodes (the text in a block element) and attribute nodes (key/value pairs). We don’t always show every node in our diagrams. Consider the <p> element from the example above:
  
```html
<p>This is a paragraph with a <a href="index.html">link</a> in it.</p>
```

* Here are the nodes that would be created:

![DOM Nodes in our p example](images/p-node.png)  

* In this diagram, the gray, square boxes represent element nodes, while the white, rounded boxes are text nodes.

* Our DOM Tree gets its name because of its shape: a root element connected to child nodes that extend like the branches of a tree. This tree structure is how the browser views our web page, and is why it is so important for us to open and close our HTML tags in order (i.e., our tags define the structure of the tree that the browser will create at runtime).

* As web developers we can see and interact with the DOM tree for a page using the browser’s built-in developer tools:

* The dev tools allow us to view and work with the parsed DOM elements in a page. We can also use the dev tools to visually select an element in the page, and find its associated DOM element:

![Find Individual Elements in a Web Page](images/inspect-element.gif 

Web pages are dynamic: they can change in response to user actions, different data,
JavaScript code, etc.  Where HTML defines the initial structure and content of a page,
the DOM is the *current* or *actual* content of the page as it exists right now in your browser.
And this can mean something quite different from the initial HTML used to load the page.

Consider a web page like GMail (or another email web client).  When you visit your Inbox, the
messages you see are not the same as when your friend visits hers.  The HTML for GMail is the same
no matter who loads the page.  But it quickly changes in response to the needs of the current user.

So how does one modify a web page after it's been rendered in the browser?  The answer is DOM programming.
We've been using this "DOM" acronym without defining it, and its high time we did.

The [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) is a programming interface (i.e., set of Objects, functions, properties) allowing scripts to interact with, and modify documents (HTML, XML).  The DOM is an object-oriented representation of a web page.  Client-side web programming is essentially *using* the DOM via JavaScript to make web pages *do* things or *respond* to actions (e.g., user actions).
    

[🔝](#toc)  
  

### 





[🔝](#toc)  
  
### 




  
[🔝](#toc)  

### 


  
[🔝](#toc)  

###


  
[🔝](#toc)  

### 



[🔝](#toc)    
  
  
### 


  
[🔝](#toc)  

  
  
  
