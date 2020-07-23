import React from "react";

function Navbar() {
  return (
    <div style={navbar}>
      <h1 style={header}>Test Task for Yalantis React.js School</h1>
    </div>
  );
}

export default Navbar;

const navbar = {
  display: "flex",
  justifyContent: "center",
  height: "7em",
  backgroundColor: "#000000",
  width: "100vw",
};

const header = {
  color: "#ef6400",
  fontSize: "2.5em",
  textAlign: "center",
  margin: "auto",
};
