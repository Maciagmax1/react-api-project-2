import { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";
import FilterForm from "./FilterForm";
import "./Header.css";
import SearchForm from "./SearchForm";

const Header = () => {
  const [formToggle, setFormToggle] = useState(false);
  const { watchList } = useContext(WatchListContext);

  return (
    <header className="Header">
      <div className="header-wrapper">
        <Link to="/">
          <h1>QuickFlix</h1>
        </Link>
        {formToggle ? <FilterForm /> : <SearchForm />}
        <button
          className="filter-btn"
          onClick={() => setFormToggle(!formToggle)}
        >
          {formToggle ? <span>Search</span> : <span>Filter</span>}
        </button>

        <div className="hidden-link-div">
          <Link className="links" to="/movies/watchlist">
            <div className="number-container">
              <i className="fa-solid fa-eye"></i>
              <span className="number">{watchList.length}</span>
            </div>
            <p>Watch List</p>
          </Link>

          <Link className="links" to="/">
            <i className="fa-solid fa-house-chimney"></i>
            <p>Home</p>
          </Link>
          <Link className="links" to="/">
            <i className="fa-solid fa-right-to-bracket"></i>
            <p>Login</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
