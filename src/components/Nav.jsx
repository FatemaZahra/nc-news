import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { Dropdown } from "react-bootstrap";

const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <Link to="/" className="Nav material-symbols-outlined">
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
        person_filled
      </Link>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="dropdown Nav"
        >
          <span class="material-symbols-outlined">expand_more</span> Filter
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            href="/articles/sort_by/created_at"
            className="dropdown-content Nav"
          >
            By Date
          </Dropdown.Item>
          <Dropdown.Item
            href="/articles/sort_by/comment_count"
            className="dropdown-content Nav"
          >
            By Comment Count
          </Dropdown.Item>
          <Dropdown.Item
            href="/articles/sort_by/votes"
            className="dropdown-content Nav"
          >
            By Votes
          </Dropdown.Item>
          <Dropdown.Item
            href="/articles/order/ASC"
            className="dropdown-content Nav"
          >
            In Ascending Order
          </Dropdown.Item>
          <Dropdown.Item
            href="/articles/order/DESC"
            className="dropdown-content Nav"
          >
            In Descending Order
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <p className="Nav">Signed in as: {user.username}</p>
    </nav>
  );
};

export default Nav;
