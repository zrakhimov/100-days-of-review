[Go to ToC](../README.md)

# React Hooks

## ToC

- [Load data from Web API](#load-data-from-web-api)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)

### Load Data From Web API

- We've had a situation where our data was statically set inside of our component

```jsx
const user = [
    // Data was here
]

return (
    <Profiles users={users}>
)
```

- Let's write a module where it helps us to retrieve data from an API instead of statically stored data.

```js

// users.js file
function load() {
    const data = fetch('https://reqres.in/api')
    .then(response => {
        return response.json();
    })
    .then(results => results.data)
    .catch(err) {
        console.log(err);
    }
}

export default load;

```

- Now we have to use it in our `App` component, but we can't really do the following:

```js
const users = load();
```

- Since we're working with React and `load` is a promise, React takes care of **when** things are happening. So we have to use "hooks" which will manage when to do side effects.
- So we have to use `useEffect` hook from 'react' library

```jsx
import {useEffect} from 'react'

function App() {

    useEffect( () => {

    })

    return (
        <div className='App'>
            <Profiles users={users}>
        </div>
    )
}

```

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
