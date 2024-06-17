import axios from "axios";
import React, { useEffect, useState } from "react";

const ButtonsWithTodo = () => {
  const [todo, setTodo] = useState({});
  const [id, setId] = useState(0);
  const [buttonClick, setButtonClick] = useState(false);
  const buttons = [1, 2, 3, 4, 5];
  const handleBtnClick = (e) => {
    e.preventDefault();
    setButtonClick(!buttonClick);
    setId(e.target.value);
    // console.log(e.target.value);
  };
  useEffect(() => {
    const url = `https://sum-server.100xdevs.com/todo?id=${id}`;
    axios.get(url).then((res) => {
      setTodo(res.data.todo);
      //   console.log(res.data, id, todo);
    });
  }, [buttonClick]);

  return (
    <div>
      <div>
        {buttons.map((btn, idx) => (
          <button key={idx} value={btn} onClick={handleBtnClick}>
            {btn}
          </button>
        ))}
      </div>
      {todo && (
        <div>
          <p>Title: {todo.title}</p>
          <p> Description: {todo.description}</p>
        </div>
      )}
    </div>
  );
};

export default ButtonsWithTodo;
