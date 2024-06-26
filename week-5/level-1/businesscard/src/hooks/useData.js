import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const url = "http://localhost:3000";

const credential = Cookies.get("tokenHai");
function useData(route) {
  const [result, setResult] = useState("");
  useEffect(() => {
    axios.get(url + route, { headers: { credential } }).then((res) => {
      setResult(res.data);
      return res.data;
    });
    console.log("fetching");
  }, []);

  return [result, credential];
}
export default useData;
