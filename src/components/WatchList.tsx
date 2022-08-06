import { useContext } from "react";
import WatchListContext from "../context/WatchListContext";
import Card from "./Card";
import "./WatchList.css";

const WatchList = () => {
  const { watchList } = useContext(WatchListContext);

  return (
    <div className="WatchList">
      {watchList.map((movie, index) => (
        <Card movie={movie} key={index} />
      ))}
    </div>
  );
};

export default WatchList;
