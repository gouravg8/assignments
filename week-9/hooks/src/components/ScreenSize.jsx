import React from "react";
import useScreenSize from "../hooks/useScreenSize";

const ScreenSize = () => {
  const { width, height } = useScreenSize();
  return (
    <div>
      width: {width}, height: {height}
    </div>
  );
};

export default ScreenSize;
