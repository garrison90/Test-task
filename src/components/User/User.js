import React from "react";
import PropTypes from "prop-types";
import "./User.css";

function User({ user }) {
  return <li className="user-item">{`${user.firstName} ${user.lastName}`}</li>;
}

User.propTypes = {
  user: PropTypes.object,
};

export default User;
