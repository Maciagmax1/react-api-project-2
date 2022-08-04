import { Link } from "react-router-dom";
import "./Header.css";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>QuickFlix</h1>
      </Link>
      <SearchForm />
    </header>
  );
};

export default Header;
