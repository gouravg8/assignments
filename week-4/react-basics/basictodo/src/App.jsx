import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ButtonsWithTodo from "./components/ButtonsWithTodo";
import SumToN from "./components/SumToN";
import UseCallbackExp from "./components/UseCallbackExp";

// function Textcompo() {
//   return (
//     <div>
//       <h3>Hello from home</h3>
//     </div>
//   );
// }

const App = () => {
  // const [inputTodo, setInputTodo] = useState({ text: "suar", id: "1" });
  // const [todoList, setTodoList] = useState([]);

  // const todos = [
  //   {
  //     title: "Go to gym",
  //     description: "Go to gym from 7-8PM",
  //     id: 1,
  //   },
  //   {
  //     title: "Go to gym2",
  //     description: "Go to gym2 from 9-10PM",
  //     id: 2,
  //   },
  // ];
  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
  //     setTodoList(res.data.todos);
  //   });

  // setTodoList(todos);
  // }, []);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(todoList);
  //   if (inputTodo.text) {
  //     setTodoList([inputTodo, ...todoList]);
  //     setInputTodo({ text: "", id: "" });
  //   }
  // };
  // const deleteTodo = (e) => {
  //   e.target.parentElement.remove();
  // };
  // const updateTodo = (e) => {};
  // const liStyle = {
  //   display: "flex",
  //   gap: "15px",
  // };
  return (
    <div>
      <h1>This is the basic todo</h1>
      {/* <SumToN n={4}/> */}
      <UseCallbackExp />
      {/* <ButtonsWithTodo /> */}
      {/* <div>
        <input
          style={{ margin: "5px", padding: "2px 4px", borderRadius: "5px" }}
          type="text"
          name="inp"
          id="inp"
          value={inputTodo.text}
          onChange={(e) =>
            setInputTodo({ text: e.target.value, id: Math.random() * 100 })
          }
        />
        <button
          onClick={handleSubmit}
          style={{ margin: "5px", padding: "2px 4px", borderRadius: "3px" }}
        >
          add
        </button>
      </div> */}
      {/* <ul> */}
      {/* <Todo id={5} /> */}
      {/* {console.log(data)} */}
      {/* {todoList.map(({ id, title, description }) => (
          <li key={id}>
            {title}, {description}
          </li>
        ))} */}
      {/* {todoList.map(({ title, id }) => (
          <li key={id} style={liStyle}>
            {title} */}
      {/* <button onClick={deleteTodo}>X</button>
            <button onClick={updateTodo}>edit</button> */}
      {/* </li> */}
      {/* ))} */}
      {/* </ul> */}
      {/* <WraperCompo>
        <Textcompo />
        <Todo />
      </WraperCompo> */}
    </div>
  );
};

// function WraperCompo({ children }) {
//   return (
//     <div
//       style={{
//         border: "2px solid black",
//         borderRadius: "5px",
//         fontSize: "20px",
//         fontFamily: "verdana",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// const Todo = React.memo(({ text, id }) => {
//   <li key={id}>
//     {text} <button onClick={deleteTodo}>X</button>
//     <button onClick={editTodo}>edit</button>
//   </li>;
// });

export default App;
