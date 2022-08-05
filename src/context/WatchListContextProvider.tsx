import { ReactNode, useState } from "react";
import Movie from "../models/Movie";
import WatchListContext from "./WatchListContext";

interface Props {
  children: ReactNode;
}

const WatchListContextProvider = ({ children }: Props) => {
  const [watchList, setWatchList] = useState<Movie[]>([]);
  const addToWatchList = (movie: Movie): void => {
    setWatchList((prev) => {
      const newList: Movie[] = prev.slice(0);
      newList.push(movie);
      return newList;
    });
  };
  const removeFromWatchList = (id: number): void => {
    setWatchList((prev) => {
      const newList: Movie[] = prev.slice(0);
      const index: number = prev.findIndex((item) => item.id === id);
      newList.splice(index, 1);
      return newList;
    });
  };
  const isInWatchList = (id: number): boolean =>
    watchList.some((item) => item.id === id);
  return (
    <WatchListContext.Provider
      value={{ watchList, addToWatchList, removeFromWatchList, isInWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
