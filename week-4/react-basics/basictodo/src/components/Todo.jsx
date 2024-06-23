import axios from "axios";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

const useTodo = (url) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setTodo(res.data.todo));
  }, [url]);
  return todo;
};

const Todo = function Todo() {
  const url = "https://sum-server.100xdevs.com/todo?id=" + 2;
  const todo = useTodo(url);
  return (
    <div>
      <h2>hello</h2>
      <li key={todo.id}>{todo.title}</li>
    </div>
  );
};

export default Todo;
