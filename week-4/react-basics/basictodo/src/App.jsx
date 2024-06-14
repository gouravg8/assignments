import React, { useState } from "react";

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
  const handleSubmit = () => {
    console.log(todoList);
    setTodoList([inputTodo, ...todoList]);
    setInputTodo({ text: "", id: "" });
  };
  return (
    <div>
      <h1>This is the basic todo</h1>
      <div>
        <input
          type="text"
          name="inp"
          id="inp"
          value={inputTodo.text}
          onChange={(e) =>
            setInputTodo({ text: e.target.value, id: Math.random() * 100 })
          }
        />
        <button onClick={handleSubmit}>add</button>
      </div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
