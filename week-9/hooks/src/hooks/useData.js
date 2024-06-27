import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

let url = "https://sum-server.100xdevs.com/todos";
function useData() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(url).then((res) => {
      setLoading(false);
      setData(res.data.todos);
    });
  }, []);
  return { data, loading };
}

export default useData;
