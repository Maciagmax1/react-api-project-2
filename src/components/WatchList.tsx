import { useContext } from "react";
import WatchListContext from "../context/WatchListContext";
import Card from "./Card";
import "./WatchList.css";

const WatchList = () => {
  const { watchList } = useContext(WatchListContext);

  return (
    <div className="WatchList">
      <div className="margin-div"></div>
      <h2 className="watch-list-title">Watch List</h2>
      <div className="watchlist-container">
        {watchList.map((movie, index) => (
          <Card movie={movie} key={index} />
        ))}
      </div>
      <div className="hidden-footloose-div"></div>
    </div>
  );
};

export default WatchList;
