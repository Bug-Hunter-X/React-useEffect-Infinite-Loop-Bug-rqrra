```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct usage: adding count to the dependency array 
    // to prevent the infinite loop. 
    // Or, remove the effect entirely if it's not needed 
  }, [count]); // The empty array [] means the effect only runs once after mount.

  return <div>Count: {count}</div>;
}
```