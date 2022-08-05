import { useContext } from "react";
import WatchListContext from "../context/WatchListContext";
import "./WatchList.css";

const WatchList = () => {
  const { watchList } = useContext(WatchListContext);

  return <div className="WatchList"></div>;
};

export default WatchList;
