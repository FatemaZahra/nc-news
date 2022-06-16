import { useState, useEffect, useContext } from "react";
import { Button } from "@mui/material";
import { getUsers } from "../utils/api";
import { UserContext } from "../context/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(UserContext);
  const [isError, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, []);

  if (isError) {
    return <p>An error occured! {isError.msg}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="user">
      {users.map((user) => {
        return (
          <li className="userCard" key={user.username}>
            <h2>{user.username}</h2>

            <Button
              className="button"
              onClick={() => {
                setUser(user);
              }}
            >
              Select this user
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
