```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: using a closure over the value of count at the time of useEffect declaration
    const intervalId = setInterval(() => {
      console.log('count inside interval:', count); // Always logs 0
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```