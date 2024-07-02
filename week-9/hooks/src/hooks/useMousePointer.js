import { useEffect } from "react";
import { useState } from "react";

export default function useMousePointer() {
  const [points, setPoints] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => setPoints({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return points;
}
