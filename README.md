# React useEffect Infinite Loop

This repository demonstrates a common error in React applications involving the `useEffect` hook.  The `useEffect` hook is used to perform side effects, such as data fetching or DOM manipulation, after the component renders. However, it's crucial to correctly manage dependencies to avoid unintended infinite loops.

**The Bug:**
The `bug.js` file contains a `useEffect` hook that attempts to update the state variable `count` within its own execution. This creates an infinite loop because each update triggers a re-render, causing the `useEffect` hook to run again and update `count` once more.

**The Solution:**
The `bugSolution.js` file demonstrates the correct approach. The dependency array is updated to include the `count` state variable. This ensures that the effect only runs when the `count` changes, preventing the infinite loop.  Alternatively removing the effect entirely if it's not needed fixes the issue as well.