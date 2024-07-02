import { useState, useEffect } from "react";

export default function useDebounce(inpVal, timeoutSec) {
  const [result, setResult] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      //   fetch("https://sum-server.100xdevs.com/todos")
      //     .then((res) => res.json())
      //     .then((out) => setResult(out.todos));
      setResult(inpVal);
    }, timeoutSec);

    return () => {
      clearTimeout(timeout);
    };
  }, [inpVal]);
  return result;
}
