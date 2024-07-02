import { useEffect } from "react";

export default function useInterval(fn, time) {
  useEffect(() => {
    const timer = setInterval(() => {
      fn();
    }, time);

    return () => {
      clearInterval(timer);
    };
  }, []);
}
