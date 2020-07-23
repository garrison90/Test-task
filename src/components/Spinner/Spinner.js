import React from "react";
import spinner from "./three-dots.svg";

function Spinner() {
  return (
    <div style={spinnerStyles}>
      <img src={spinner} alt={spinner} />
    </div>
  );
}

export default Spinner;
const spinnerStyles = {
  display: "flex",
  height: "400px",
  justifyContent: "center",
  alignSelf: "center",
};
