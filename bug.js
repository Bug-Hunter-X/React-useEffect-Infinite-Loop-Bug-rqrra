```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the effect
    // depends on 'count', which changes when the effect runs.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```