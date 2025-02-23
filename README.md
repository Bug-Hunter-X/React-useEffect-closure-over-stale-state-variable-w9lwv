# React useEffect stale closure bug
This repository demonstrates a common bug in React's `useEffect` hook where a closure unintentionally captures a stale value of a state variable.

## Bug Description
The `useEffect` hook with an empty dependency array (`[]`) is intended to run only once after the component mounts. However, if the function inside `useEffect` uses a state variable from the component's scope, it creates a closure over the initial value of that state variable. Any updates to the state variable after the `useEffect` function runs will not be reflected within the `useEffect` callback.

## Solution
The solution involves using the updated state variable value within the `useEffect` callback. This can be achieved by using the functional update pattern with `setCount` or adding the state variable as a dependency in the `useEffect` hook dependency array.

## How to reproduce
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the application: `npm start`
4. Observe the console logs showing the count always remaining at 0 inside the interval, despite the count updating in the UI. 