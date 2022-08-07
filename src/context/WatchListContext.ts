import { createContext } from "react";
import Movie from "../models/Movie";

interface WatchListContextModel {
  watchList: Movie[];
  addToWatchList: (movie: Movie) => void;
  removeFromWatchList: (id: number) => void;
  isInWatchList: (id: number) => boolean;
}

const defaultValues: WatchListContextModel = {
  watchList: [],
  addToWatchList: () => {},
  removeFromWatchList: () => {},
  isInWatchList: () => false,
};

const WatchListContext = createContext(defaultValues);

export default WatchListContext;
