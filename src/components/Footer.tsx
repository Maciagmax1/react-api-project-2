import { useContext } from "react";
import { Link } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";
import "./Footer.css";

const Footer = () => {
  const { watchList } = useContext(WatchListContext);

  return (
    <div className="Footer">
      <div className="link-container">
        <Link to="/movies/watchlist">
          <div className="number-container">
            <i className="fa-solid fa-eye"></i>
            <span className="number">{watchList.length}</span>
          </div>
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
    </div>
  );
};

export default Footer;
