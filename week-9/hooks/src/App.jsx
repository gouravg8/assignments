import React, { Component, useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Todo from "./components/Todo";
import OnlineOffline from "./components/OnlineOffline";
import MousePointer from "./components/MousePointer";
import ScreenSize from "./components/ScreenSize";
import CustomInterval from "./components/CustomInterval";
import Debounce from "./components/Debounce";

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
        {/* <Todo /> */}
        {/* <OnlineOffline /> */}
        {/* <MousePointer /> */}
        {/* <ScreenSize /> */}
        {/* <CustomInterval /> */}
        <Debounce />
      </div>
    </>
  );
}

export default App;
