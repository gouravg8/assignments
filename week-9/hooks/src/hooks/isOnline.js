import { useEffect } from "react";
import { useState } from "react";

export default function useIsOnline() {
  const [isOnline, setisOnline] = useState();
  useEffect(() => {
    setisOnline(window.navigator.onLine);
  }, []);
  return isOnline;
}
