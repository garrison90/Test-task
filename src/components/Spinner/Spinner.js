import React from "react";
import spinner from "./three-dots.svg";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="spinnerStyles">
      <img src={spinner} alt={spinner} />
    </div>
  );
}

export default Spinner;
