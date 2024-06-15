import React, { useEffect, useState } from "react";
import "./App.css";

// function Textcompo() {
//   return (
//     <div>
//       <h3>Hello from home</h3>
//     </div>
//   );
// }
// function Todo() {
//   return (
//     <ul>
//       <li>My faltu ka todo</li>
//     </ul>
//   );
// }
const App = () => {
  const [inputTodo, setInputTodo] = useState({ text: "suar", id: "1" });
  const [todoList, setTodoList] = useState([]);

  const todos = [
    {
      title: "Go to gym",
      description: "Go to gym from 7-8PM",
      id: 1,
    },
    {
      title: "Go to gym2",
      description: "Go to gym2 from 9-10PM",
      id: 2,
    },
  ];
  useEffect(() => {
    // fetch("https://sum-server.100xdevs.com/todos")
    //   .then((res) => res.json())
    //   .then((data) => setTodoList(data));
    setTodoList(todos);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoList);
    if (inputTodo.text) {
      setTodoList([inputTodo, ...todoList]);
      setInputTodo({ text: "", id: "" });
    }
  };
  const deleteTodo = (e) => {
    e.target.parentElement.remove();
  };
  const updateTodo = (e) => {};
  const liStyle = {
    display: "flex",
    gap: "15px",
  };
  return (
    <div>
      <h1>This is the basic todo</h1>
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
      <ul>
        {todoList.map(({ title, id }) => (
          <li key={id} style={liStyle}>
            {title}
            <button onClick={deleteTodo}>X</button>
            <button onClick={updateTodo}>edit</button>
          </li>
        ))}
      </ul>
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
