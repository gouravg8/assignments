import React from "react";
import useIsOnline from "../hooks/useIsOnline";

const OnlineOffline = () => {
  const isOnline = useIsOnline();
  if (isOnline) {
    return <p>yay! you are online</p>;
  } else return <div>Please come online</div>;
};

export default OnlineOffline;
