import { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";
import FilterForm from "./FilterForm";
import "./Header.css";
import SearchForm from "./SearchForm";
import WatchList from "./WatchList";

const Header = () => {
  const [formToggle, setFormToggle] = useState(false);
  const { watchList } = useContext(WatchListContext);

  return (
    <header className="Header">
      <Link to="/">
        <h1>QuickFlix</h1>
      </Link>
      {formToggle ? <FilterForm /> : <SearchForm />}
      <button onClick={() => setFormToggle(!formToggle)}>
        {formToggle ? "SearchForm" : "FilterForm"}
      </button>
    </header>
  );
};

export default Header;
