import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMovieBySearch } from "../services/MovieService";
import "./SearchForm.css";

const SearchForm = () => {
  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(debouncedSearch), 1000);
    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  const navigate = useNavigate();
  const onChangeHandler = async (e: any) => {
    // e.preventDefault();
    navigate(`/movies/search?${new URLSearchParams({ query: search })}`);
    await setSearch(e.target.value);
  };
  return (
    <form className="SearchForm">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        value={search}
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default SearchForm;
