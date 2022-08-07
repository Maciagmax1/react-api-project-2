import { ReactNode, useState } from "react";
import Movie from "../models/Movie";
import FavoritesContext from "./FavoritesContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const addFavorite = (movie: Movie): void => {
    setFavorites((prev) => {
      return [...prev, movie]; // spread operator
    });
  };

  const removeFavorite = (id: number): void => {
    setFavorites((prev) => {
      const index: number = prev.findIndex((item) => item.id === id); // finding the index
      return [...prev.slice(0, index), ...prev.slice(index + 1)]; // spread operator. return the new array
    });
  };
  const isFav = (id: number): boolean =>
    favorites.some((item) => item.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
