[Go to ToC](../README.md)

# React Hooks

## ToC

- [Load data from Web API](#load-data-from-web-api)
- [useEffect Hook](#useeffect-hook)
- [useState Hook](#usestate-hook)
- [Dependencies](#dependencies)
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

[🔝](#toc)

### `useEffect` Hook

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
        load().then(data => console.log(data))
    })

    return (
        <div className='App'>
            <Profiles users={users}>
        </div>
    )
}
```

[🔝](#toc)

### `UseState` Hook

- Now this code works, but there's no way to store data that is coming from an API call. We could have used object instance as a state in class components, but in functional components , we have to have a way to store state somewhere outside of the function. This is where we can take advantage of `useState` hook.

```jsx
import {useEffect, useState} from 'react'

function App() {
    // users - an array
    // setUsers - function to update `users`
    const [users, setUsers] = useState([]);

    useEffect( () => {
        load().then(data => setUsers(data));
    })

    return (
        <div className='App'>
            <Profiles users={users}>
        </div>
    )
}
```

[🔝](#toc)

### Dependencies

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
