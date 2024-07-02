import React from "react";
import useMousePointer from "../hooks/useMousePointer";

const MousePointer = () => {
  const points = useMousePointer();
  return (
    <div>
      point x : {points.x} and point y: {points.y}
    </div>
  );
};

export default MousePointer;
