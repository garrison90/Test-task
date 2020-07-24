import React, { useEffect, useState } from "react";
import { months } from "../../helpers/months";
import Month from "../Month/Month";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import "./MonthsList.css";

function MonthsList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchUsers = async () => {
    try {
      const result = await axios.get(
        `https://yalantis-react-school-api.yalantis.com/api/task0/users`
      );
      if (result.status === 200) {
        setUsers(result.data);
        setIsLoading(false);
      }
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (error) return <Error />;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className="months-block">
          {months.map((month, index) => (
            <Month index={index} key={index} month={month} users={users} />
          ))}
        </ul>
      )}
    </>
  );
}

export default MonthsList;
