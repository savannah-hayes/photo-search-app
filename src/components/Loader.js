import React from "react";
import "../styled-components/Loader.css";

const Loader = () => {
  return (
    <span className="dotContainer">
      <span className="dot dotOne"></span>
      <span className="dot dotTwo"></span>
      <span className="dot dotThree"></span>
    </span>
  )
}

export default Loader;