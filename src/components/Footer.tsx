import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="link-container">
        <Link to="/">
          <i className="icon fa-solid fa-house"></i>Home
        </Link>
        <Link to="/movies/watchlist">
          <i className="icon fa-solid fa-eye"></i>Watch List
        </Link>
        <Link to="/">
          <i className="icon fa-solid fa-user"></i>Account
        </Link>
      </div>
    </div>
  );
};

export default Footer;
