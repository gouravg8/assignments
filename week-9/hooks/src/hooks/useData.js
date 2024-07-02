import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

let url = "https://sum-server.100xdevs.com/todos";
function useData(n) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  //   what i've learned
  //    1: no two timer(use clearInterval) in "return" of useEffect,
  //    2: n must add as a dependency
  let count = 1;

  useEffect(() => {
    let timer = setInterval(() => {
      axios.get(url).then((res) => {
        console.log(count++);
        setLoading(false);
        setData(res.data.todos);
      });
    }, n * 1000);
    axios.get(url).then((res) => {
      console.log(count++);
      setLoading(false);
      setData(res.data.todos);
    });

    return () => clearInterval(timer);
  }, [n]);
  return { data, loading };
}

export default useData;
