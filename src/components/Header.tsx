import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import FilterForm from "./FilterForm";
import "./Header.css";
import SearchForm from "./SearchForm";

const Header = () => {
  const [formToggle, setFormToggle] = useState(false);

  return (
    <header className="Header">
      <div className="header-wrapper">
        <Link to="/">
          <h1>nulu+</h1>
        </Link>
        {formToggle ? <FilterForm /> : <SearchForm />}
        <button
          className="filter-btn"
          onClick={() => setFormToggle(!formToggle)}
        >
          {formToggle ? <span>Search</span> : <span>Filter</span>}
        </button>
      </div>
    </header>
  );
};

export default Header;
