import React from "react";
import PropTypes from "prop-types";

function User({ user }) {
  return <p>{`${user.firstName} ${user.lastName}`}</p>;
}

User.propTypes = {
  user: PropTypes.object,
};

export default User;
