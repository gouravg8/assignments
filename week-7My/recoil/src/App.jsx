import { useState } from "react";
import "./App.css";
import { useRecoilValue } from "recoil";
import { notifications, totalCount } from "../atom";
import { formatCount } from "./common";

// important to learn
// recoil-> useRecoilValue, useSetRecoilState, useRecoilState[val,set]
function App() {
  // const [notificationAtom, setNotificationAtom] = useRecoilState(notifications);
  const notificationAtom = useRecoilValue(notifications);
  const totalMessageCount = useRecoilValue(totalCount);

  // useEffect(() => {
  //   axios
  //     .get("https://sum-server.100xdevs.com/notifications")
  //     .then((res) => setNotificationAtom(res.data));
  // }, []);
  // if (totalMessageCount == 0) {
  //   return <h2>Loading...</h2>;
  // } else
  return (
    <>
      <p>Total message count: {totalMessageCount}</p>
      <button>home</button>
      <button>jobs({formatCount(notificationAtom.jobs)})</button>
      <button>
        notifications({formatCount(notificationAtom.notifications)})
      </button>
      <button>messages({formatCount(notificationAtom.messaging)})</button>

      {/* <button
        onClick={() =>
          setNotificationAtom((prev) => ({ ...prev, jobs: prev.jobs + 1 }))
        }
      >
        Increase jobs
      </button>

      <button
        onClick={() =>
          setNotificationAtom((prev) => ({
            ...prev,
            messaging: prev.messaging + 1,
          }))
        }
      >
        Increase message
      </button> */}
    </>
  );
}

export default App;
