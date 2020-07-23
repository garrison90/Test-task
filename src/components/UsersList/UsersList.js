import React from "react";
import User from "../User/User";
import "./UsersList.css";
import PropTypes from "prop-types";

function UsersList({ users, index }) {
  return (
    <div className="users-wrapper">
      {users
        .filter((user) => new Date(user.dob).getMonth() === index)
        .map((user) => (
          <User key={user.id} user={user} />
        ))}
    </div>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
};

export default UsersList;
