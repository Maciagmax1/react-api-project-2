import axios from "axios";
import MultipleMovieResponse from "../models/MultipleMovieResponse";

const key: string = process.env.REACT_APP_MOVIE_KEY || "";

export const getPopularMovies = (): Promise<MultipleMovieResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/movie/popular", {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};
