import React, { useCallback, useState } from "react";

const UseCallbackExp = () => {
  const [counter, setCounter] = useState(0);

  const clickHandle = useCallback(() => {
    console.log("child renders");
  }, []);

  return (
    <div>
      <ChildCompo fn={clickHandle} />
      <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>
    </div>
  );
};

const ChildCompo = React.memo(({ fn }) => {
  console.log("inside child");
  return <button onClick={fn}>button clicked</button>;
});

export default UseCallbackExp;
