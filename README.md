
# useWatch

A custom React hook that leverages the `useEffect` hook to watch for changes in dependencies and execute a callback function.

## Installation

Install the `use-watch-effect` package using npm:

```bash
npm install use-watch-effect
```

or using Yarn:

```bash
yarn add use-watch-effect
```

## Usage

Import the `use-watch-effect` hook in your React component:

```javascript
import React from 'react';
import useWatch from 'use-watch-effect';
```

Use the `useWatch` hook in your component:

```javascript
const MyComponent = () => {
  useWatch((preDependency1,preDependency2) => {
    if(preDependency1!==dependency1){
        console.log('Dependencie1 have changed!');
    }
    if(preDependency2!==dependency2){
        console.log('Dependencie2 have changed!');
    }
  }, [dependency1, dependency2]);
  // Your component code here
};
```
