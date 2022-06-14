import { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import { UserContext } from "../context/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="user">
      {users.map((user) => {
        return (
          <li className="userCard" key={user.username}>
            <h2>{user.username}</h2>

            <button
              className="button"
              onClick={() => {
                setUser(user);
              }}
            >
              Select this user
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
