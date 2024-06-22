import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const url = "http://localhost:3000/card";
function useData() {
  const [result, setResult] = useState("");
  const credential = Cookies.get("tokenHai");
  useEffect(() => {
    let out = axios.get(url, { headers: { credential } }).then((res) => {
      console.log(out);
      return res.data;
    });

    setResult(out);
  }, []);

  return result;
}
export default useData;
