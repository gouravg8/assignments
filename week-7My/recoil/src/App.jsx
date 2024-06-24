import { useState } from "react";
import "./App.css";
import { useRecoilValue, useRecoilState } from "recoil";
import { jobAtom, messageAtom, notificationAtom, totalCount } from "../atom";
import { formatCount } from "./common";
import { useSetRecoilState } from "recoil";

// important to learn
// recoil-> useRecoilValue, useSetRecoilState, useRecoilState[val,set]
function App() {
  const [jobAtomState, setJobAtomState] = useRecoilState(jobAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const messageCount = useRecoilValue(messageAtom);
  const setMessageCount = useSetRecoilState(messageAtom);
  const totalMessageCount = useRecoilValue(totalCount);

  return (
    <>
      <p>Total message count: {totalMessageCount}</p>
      <button>home</button>
      <button>jobs({formatCount(jobAtomState)})</button>
      <button>notifications({formatCount(notificationCount)})</button>
      <button>messages({formatCount(messageCount)})</button>

      <button onClick={() => setJobAtomState((c) => c + 1)}>
        Increase jobs
      </button>

      <button onClick={() => setMessageCount((c) => c + 1)}>+message</button>
    </>
  );
}

export default App;
