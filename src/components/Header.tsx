import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import FilterForm from "./FilterForm";
import "./Header.css";
import SearchForm from "./SearchForm";

const Header = () => {
  const [formToggle, setFormToggle] = useState(false);

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
