import { useContext } from "react";
import { Link } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";
import "./Footer.css";

const Footer = () => {
  const { watchList } = useContext(WatchListContext);

  return (
    <div className="Footer">
      <Link to="/movies/watchlist">
        <i className="fa-solid fa-eye">{watchList.length}</i>
        <p>Watch List</p>
      </Link>

      <Link to="/">
        <i className="fa-solid fa-house-chimney"></i>
        <p>Home</p>
      </Link>
      <Link to="/">
        <i className="fa-solid fa-right-to-bracket"></i>
        <p>Login</p>
      </Link>
    </div>
  );
};

export default Footer;
