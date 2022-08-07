import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import CardContainer from "./CardContainer";
import "./WatchList.css";

const WatchList = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="WatchList">
      <CardContainer movies={favorites} />
    </div>
  );
};

export default WatchList;
