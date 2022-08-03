import { createContext } from "react";
import Genre from "../models/Genre";

interface GenresContextModel {
  genres: Genre[];
}

const defaultValues: GenresContextModel = {
  genres: [],
};

const GenresContext = createContext(defaultValues);

export default GenresContext;
