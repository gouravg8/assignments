export default MyCompoFn = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  useEffect(() => {
    console.log("component mounts");
    return () => {
      console.log("compon Unmounts");
    };
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>increase</button>
    </div>
  );
};
