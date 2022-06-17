import { Link } from "react-router-dom";
const FilterDropDown = () => {
  return (
    <div class="dropdown">
      <button class="dropbtn">
        <span class="material-symbols-outlined">filter_list</span>
        <span className="hidden-mobile">Filter</span>
      </button>
      <div class="dropdown-content">
        <Link to={`/articles/sort_by/created_at`} className="Nav link">
          <p className="dropdown-list">By Date</p>
        </Link>
        <Link to={`/articles/sort_by/comment_count`} className="Nav link">
          <p className="dropdown-list"> By Comment Count</p>
        </Link>
        <Link to={`/articles/sort_by/votes`} className="Nav link">
          <p className="dropdown-list"> By Votes</p>
        </Link>
        <Link to={`/articles/order/ASC`} className="Nav link">
          <p className="dropdown-list"> In Ascending Order</p>
        </Link>
        <Link to={`/articles/order/DESC`} className="Nav link">
          <p className="dropdown-list"> In Descending Order</p>
        </Link>
      </div>
    </div>
  );
};
export default FilterDropDown;
