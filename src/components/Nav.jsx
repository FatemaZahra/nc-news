import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/User";

const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <Link to="/" className="Nav material-symbols-outlined">
        Home
      </Link>
      <Link to={`/topics/coding`} className="Nav">
        Coding
      </Link>
      <Link to={`/topics/football`} className="Nav">
        FootBall
      </Link>
      <Link to={`/topics/cooking`} className="Nav">
        Cooking
      </Link>
      <Link to={`/users`} className="Nav material-symbols-outlined">
        person_filled
      </Link>
      <p className="Nav">Signed in as: {user.username}</p>
    </nav>
  );
};

export default Nav;
