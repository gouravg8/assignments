import React from "react";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Debounce = () => {
  const [inputVal, setInputVal] = useState("");
  const debounceValue = useDebounce(inputVal, 500);

  //   console.log(debounceValue);

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />

      <p>value: {debounceValue}</p>
      {/* <ul>
        {debounceValue &&
          debounceValue.map((todo) => (
            <li key={todo.title}>
              {todo.title}, {todo.description}
            </li>
          ))}
      </ul> */}
    </div>
  );
};

export default Debounce;
