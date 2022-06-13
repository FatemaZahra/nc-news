import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="Nav">
        Home
      </Link>
      <Link to={`/articles/coding`} className="Nav">
        Coding
      </Link>
      <Link to={`/articles/football`} className="Nav">
        FootBall
      </Link>
      <Link to={`/articles/cooking`} className="Nav">
        Cooking
      </Link>

      <p className="Nav">Sign-in Placeholder</p>
    </nav>
  );
};

export default Nav;
