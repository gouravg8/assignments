import React from "react";
import { useState } from "react";
import useIsOnline from "../hooks/isOnline";

const OnlineOffline = () => {
  const isOnline = useIsOnline();
  if (isOnline) {
    return <p>yay! you are online</p>;
  } else return <div>Please come online</div>;
};

export default OnlineOffline;
