import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const handleChange = () =>
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    window.addEventListener("resize", handleChange);
    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, []);
  return screenSize;
}
