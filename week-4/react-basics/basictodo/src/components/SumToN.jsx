import React, { useMemo, useState } from "react";

const SumToN = () => {
  const [input, setInput] = useState(0);
  const [sum, setSum] = useState(0);
  const [counter, setCounter] = useState(0);

  let summ = useMemo(() => {
    let summa = 0;
    for (let i = 1; i <= input; i++) {
      summa += i;
    }
    return summa;
  }, [input]);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter number"
      />
      <p>sum is : {summ}</p>
      <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>
    </div>
  );
};

export default SumToN;
