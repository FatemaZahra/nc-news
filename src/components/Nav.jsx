import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="Nav">
        Home
      </Link>
      <p className="Nav">Topic Names Placeholder</p>
      <p className="Nav">Sign-in Placeholder</p>
    </nav>
  );
};

export default Nav;
