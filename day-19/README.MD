
[Go to ToC](../README.md)

# AJAX and Fetch API

## ToC
* [AJAX](#ajax)
* [How to work with AJAX request?](#how-to-work-with-ajax-request)
* [Demo: Bitcoin in USD](#demo-bitcoin-in-usd)
* [JSON](#json)
* [Demo: Currency Exchange](#demo-currency-exchange)
* [FETCH() API](#fetch-api)



## AJAX

AJAX stands for Asynchronous JavaScript and XML and the term was coined by [Jesse James Garret](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/) in 2005.

It is based on a group of web technologies such as HTML ( and at the time XHTML) , CSS, JavaScript, the DOM, XML, JSON and a web API called `XMLHttpRequest` or just `XHR` for short.

This will allow to update parts of the front-end dynamically without refreshing the whole page.

For example, when you visit `gmail` or `facebook`, you can simply interact with the app without refreshing the page. AJAX makes this possible.

Instead of modifying the entire DOM, we instead make background requests for data from servers, and then use that data to update the page's contents live via the DOM's APIs.

## How to work with AJAX request?

Browsers provide an API to work with `XMLHttpRequest` object (XHR) for short. This will let us to send HTTP requests and recieve data responses in various formats such as XML, HTML, JSON, text, binary and etc.

```javascript

// 1. Create a new XMLHttpRequest Object using it's constructor
var xhr = new XMLHttpRequest();

// 2. Define an event handler for the `load`

xhr.onload = function () {
	//3. Get the data from `xhr` object's `responseText` property
	var data = this.responseText;
	console.log('data arrived', data);
}

// 4. Create an HTTP GET request to given URL
xhr.open("GET", "http://example.com/");

// 5. Send created get request

xhr.send()


```

## Demo: Bitcoin in USD

For the demo, we'll be using https://www.blockchain.com/ which provides a number of web services we can use to get the value of bitcoin in USD.

The web service endpoint is https://blockchain.info/q/24hrprice which gives the price in USD over the past 24 hours.

Here's the requirements:

* We want our webpage to include this information
* We want our webpage to update this information every minute


1) First we need to create a webpage and write our javascript to get the value of bitcoin once
2) Then we'll create an additional feature which updates it every minute

So here we go.

1. Create `index.html` and put all the basic structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bitcoin Value</title>
</head>
<body>
   <main>
       <p>Current value of Bitcoin is <span id="bitcoin-value"></span></p>
   </main>
   <script src="script.js"></script> 
</body>
</html>


```


2. Create `script.js` in the same folder and make sure your HTML file contains a link to this javascript file as above.

```javascript
// create an event listener which executes an AJAX request when the page is finished loading
document.addEventListener('load', () => {
	// Call a function which was defined below to get the bitcoin value
	getBitcoinValue();
});

function getBitcoinValue() {
	// 1. Create an XMLHttpRequest object
	let xhr = new SMLHttpRequest()
	//  web service endpoint
	let url  = "https://blockchain.info/q/24hrprice?cors=true";
	
	// 2. Define what needs to be done when the data is received
	xhr.onload = () => {
	    // 3. Save received data in a variable
		let response = this.responseText;	
		// 4. Format it properly
		let value = res + " USD";
	    
		// 5. Get the node from DOM where the data will be placed
		let span = document.querySelector('#bitcoin-value');
		// 6. Put data inside that node
		span.innerHTML = value;
	}
	
	// 7. Now create GET request and send it
	xhr.open("GET", url);
	xhr.send()

}

```


We should be seeing the value when we open our `index.html` file.

!(Pasted image 20210213151731.png)


2) Now the next task is to update it every 60 seconds:

- First we create a function called `updateBitcoinValue(newValue)` which receives a value that has been obtained from a response in `getCurrentValue` function
- Secondly, we have to update our `<span>` with the new value
- Lastly we need to use `SetTimeout()` function by calling `getCurrentValue` and setting it for 60 seconds

Here's the updated code:

```javascript
window.addEventListener('load', ()\=> {
	getBitcoinValue();
})

  
function updateBitconValue(newValue) {
	document.querySelector('#bitcoin-value').innerHTML = newValue;
	setTimeout(getBitcoinValue, 60*1000);
}

  
function getBitcoinValue() {

	let xhr = new XMLHttpRequest();
	let url = "https://blockchain.info/q/24hrprice";

	xhr.onload = function () {
		let res = this.responseText;
		let value = res + " (USD)"
		document.querySelector('#bitcoin-value').innerHTML = value;
		updateBitconValue(value);
	}

	xhr.open("GET", url);
	xhr.send();

}
```

## JSON 

Our previous example was very simple data format: a single number. Often we'll need to work with more complex data, with complex hierarchies such as arrays, both texts and numbers and lists. To do this we need a format that allows us to serialize (turn into strings) data structures like `Array`s, `Object`s etc.

The two most popular formats for data exchange on the internet are [JavaScript Object Notation (JSON)](https://en.wikipedia.org/wiki/JSON) and [Extensible Markup Language (XML)](https://en.wikipedia.org/wiki/XML). We'll focus on JSON, but let's see XML as well how it looks.

For example if we have the following data:


```
1) Name: Apple
   Price per Pound: $1.29
   Location: Aisle 3

2) Name: Carrots
   Price per Pound: $0.46
   Location: Aisle 2
```

Here's how the data might look in XML:


```xml
<products>
    <product>
        <name>Apple</name>
        <price currency="CAD">1.29</price>
        <aisle>3</aisle>
    </product>
    <product>
        <name>Carrots</name>
        <price currency="CAD">0.46</price>
        <aisle>2</aisle>
    </product>
</products>
```

	Both XML and HTML are markup languages. You can think of HTML as an instance of XML.

Here's how the data might look like as an `Object Literal`

```javascript
var products = [
    {
        name: "Apple",
        price: {
            currency: "CAD",
            value: 1.29
        },
        aisle: 3
    },
    {
        name: "Carrots",
        price: {
            currency: "CAD",
            value: 0.46
        },
        aisle: 2
    }
];
```

Finally, same data in JSON format

```json
[
    {
        "name": "Apple",
        "price": {
            "currency": "CAD",
            "value": 1.29
        },
        "aisle": 3
    },
    {
        "name": "Carrots",
        "price": {
            "currency": "CAD",
            "value": 0.46
        },
        "aisle": 2
    }
]
```

- JavaScript includes built-in function to convert from / to JSON strings
 ```javascript 
 	let json = JSON.stringify(products); 
 ```

```javascript 
	let products = JSON.parse(json)
``` 


## Demo: Currency Exchange

In this example we'll add on to our existing bitcoin value web page. 

We'll use an api by  [European Central Bank’s Exchange Rate API](https://exchangeratesapi.io/).. By visiting their website, you'll see the API's documentation, which is generally a good place to start when you wish to use an API. 

To test the API simply try visiting: [https://api.exchangeratesapi.io/latest?base=USD](https://api.exchangeratesapi.io/latest?base=USD).

Now in our `script.js` file, let's create a new function which sends an AJAX request to the above url to retrieve *rates*

```javascript

function getCurrencyRates() {
    // 1. Create XHR object
	let xhr = new XMLHttpRequest();
	// 2. Define url to use next
	let url = "https://api.exchangeratesapi.io/latest?base=USD";
	
	// 5. When the data comes back parse JSON and display on console log
	xhr.onload = function() {
		try {
			let data = JSON.parse(this.responseText);
			console.log(data);
		} catch(e) {
			console.log("Error: ", e);
		}
  	}
	// 3. Create GET request
	xhr.open("GET",url);
	// 4. Send created request
	xhr.send();

}

```


Let's create a form which will have an `input` field where the user will enter currency to convert `1 USD` and a submit `button` to get the rate.

```html
<form>
	<input id="currency" placeholder="Currency" type="text">
	<input type="submit" value="Convert">
</form>
<p id="result"></p>
```

Changes in the script:

```javascript

window.addEventListener('load', () => {
    // Get bitcoin value
    getBitcoinValue();

    document.querySelector('button').addEventListener('click',() => {
        let xhr = new XMLHttpRequest();
        let url = "https://api.exchangeratesapi.io/latest?base=USD";
        
        xhr.onload =  function() {
            try {
                let data = JSON.parse(this.responseText);

                // Now we have the data, we can work on it
                // Get the currency input from user
                const currency = document.querySelector('#currency').value;
                // Get rate from data
                const rate = data.rates[currency];

                // Check if currency is valid
                if (rate != undefined) {
                    // Display exchange rate on the screen
                    document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
                }

            } catch(e) {
                console.log("Error: ", e);
            }
            
        }
        xhr.open("GET",url);
        xhr.send();

    });

```

Final Output should look like this
!(Pasted image 20210213121708.png)




## FETCH() API

While `XHR` is a popular choice for accessing data from web services, in recent years a new APIs have also emerged that offer similar and enhanced capabilities. 

The `fetch()` API provides JavaScript developers a rich set of objects and functions for working with the entire HTTP network infrastructure, including things like  [requests](https://developer.mozilla.org/en-US/docs/Web/API/Request), [responses](https://developer.mozilla.org/en-US/docs/Web/API/Response), the [cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache), etc.

It uses the modern [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API for handling callbacks.

Here's what our Currency Exchange example will look like using fetch()

```javascript
window.addEventListener('load', () => {
    // Get bitcoin value
    getBitcoinValue();

    document.querySelector('button').addEventListener('click',() => {
        // Send a GET request to the URL
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
        // Put response into json form
        .then(response => response.json())
        .then(data => {
            // Get currency from user input and convert to upper case
            const currency = document.querySelector('#currency').value.toUpperCase();

            // Get rate from data
            const rate = data.rates[currency];

            // Check if currency is valid:
            if (rate !== undefined) {
                // Display exchange on the screen
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
            }
            else {
                // Display error on the screen
                document.querySelector('#result').innerHTML = 'Invalid Currency.';
            }
        })
        // Catch any errors and log them to the console
        .catch(error => {
            console.log('Error:', error);
        });

    });
})
```

