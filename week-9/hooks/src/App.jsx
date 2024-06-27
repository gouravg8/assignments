import React, { Component, useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Todo from "./components/Todo";

function App() {
  // const [isDelay, setIsDelay] = useState(false);
  // useEffect(() => {
  //   setInterval(() => {
  //     setIsDelay((d) => !d);
  //   }, 4000);
  // });

  return (
    <>
      <div>
        {/* {isDelay && <MyCompo />} */}
        {/* {isDelay && <MyCompo2 />} */}
        <Todo />
      </div>
    </>
  );
}

export default App;
