import axios from "axios";
const url = "http://localhost:3000/card";
export default async function useData() {
  const result = await axios.get(url).then((res) => console.log(res.data));

  return result;
}
