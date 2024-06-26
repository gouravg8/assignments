import { useState } from "react";
import "./App.css";
import { useRecoilValue } from "recoil";
import { notifications, todosFaimily, totalCount } from "../atom";
import { formatCount } from "./common";
import { useRecoilStateLoadable } from "recoil";
import { useRecoilValueLoadable } from "recoil";

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

      <Todo id={1} />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={3} />
    </>
  );
}

const Todo = ({ id }) => {
  const todo = useRecoilValueLoadable(todosFaimily(id)); // for only value
  // console.log(todo);
  // console.log(todo);
  if (todo.state == "loading") {
    return <h1>Loading...</h1>;
  } else if (todo.state == "hasValue")
    return (
      <>
        <h1 key={id}>
          {todo.contents.title}, {todo.contents.description}
        </h1>
      </>
    );
};
export default App;
