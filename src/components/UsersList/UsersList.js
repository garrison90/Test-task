import React from "react";
import User from "../User/User";
import PropTypes from "prop-types";

function UsersList({ users, index }) {
  return (
    <ul>
      {users
        .filter((user) => new Date(user.dob).getMonth() === index)
        .map((user) => (
          <User key={user.id} user={user} />
        ))}
    </ul>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
};

export default UsersList;
