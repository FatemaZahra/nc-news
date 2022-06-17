import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/User";
import FilterDropDown from "./FilterDropDown";

const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <Link to="/" className="Nav material-symbols-outlined ">
        Home
      </Link>
      <Link to={`/topics/coding`} className="Nav">
        <span className="material-symbols-outlined">code</span>
        <span className="hidden-mobile">Coding</span>
      </Link>
      <Link to={`/topics/football`} className="Nav">
        <span className="material-symbols-outlined">sports_soccer</span>
        <span className="hidden-mobile">FootBall</span>
      </Link>
      <Link to={`/topics/cooking`} className="Nav">
        <span className="material-symbols-outlined">cooking</span>
        <span className="hidden-mobile">Cooking</span>
      </Link>
      <Link to={`/users`} className="Nav material-symbols-outlined">
        person_filled<span className="hidden-mobile">Users</span>
      </Link>
      <p className="Nav">Signed in as: {user.username}</p>

      <FilterDropDown />
    </nav>
  );
};

export default Nav;
