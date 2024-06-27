import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

let url = "https://sum-server.100xdevs.com/todos";
function useData(n) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  let count = 0;
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      axios.get(url).then((res) => {
        console.log(count++);
        setLoading(false);
        setData(res.data.todos);
      });
    }, n * 1000);
  }, []);
  clearInterval(timer);
  return { data, loading };
}

export default useData;
