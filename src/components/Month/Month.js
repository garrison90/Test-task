import React, { useState, useEffect } from "react";
import UsersList from "../UsersList/UsersList";
import "./Month.css";
import PropTypes from "prop-types";

function Month({ month, users, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    setBackgroundColor(usersCount(users, index));
  }, [users, index]);

  function handleEnter() {
    setIsHovered(true);
  }

  function handleLeave() {
    setIsHovered(false);
  }

  function usersCount(users, index) {
    return users.filter((user) => new Date(user.dob).getMonth() === index)
      .length;
  }

  function setBackgroundColor(number) {
    if (number > 11) {
      setColor("red");
    } else if (number >= 7) {
      setColor("green");
    } else if (number >= 3) {
      setColor("blue");
    } else if (number < 3) {
      setColor("grey");
    }
  }

  return (
    <>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`month-wrapper ${color ? `${color}` : ""}`}
      >
        <p>{month}</p>
      </div>
      {isHovered ? <UsersList users={users} index={index} /> : null}
    </>
  );
}

Month.propTypes = {
  month: PropTypes.string,
  index: PropTypes.number,
  users: PropTypes.arrayOf(PropTypes.object),
};

export default Month;
