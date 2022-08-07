import { createContext } from "react";
import Movie from "../models/Movie";

interface FavoritesContextModel {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFav: (id: number) => boolean;
}

const defaultValues: FavoritesContextModel = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFav: () => false,
};

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;
