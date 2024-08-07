import React from "react";
import useData from "../hooks/useData";

const Todo = () => {
  const { data, loading } = useData(10);
  if (loading) {
    return <div>loading...</div>;
  } else
    return (
      <div>
        {data.map((t) => (
          <p key={t.title}>
            {t.title}, {t.description}
          </p>
        ))}
      </div>
    );
};

export default Todo;
