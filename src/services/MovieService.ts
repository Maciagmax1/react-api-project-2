import axios from "axios";
import MovieDetails from "../models/MovieDetails";
import MultipleMovieResponse from "../models/MultipleMovieResponse";
import SingleCertificationResponse from "../models/SingleCertificationResponse";

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

export const getMovieById = (id: string): Promise<MovieDetails> => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`, {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

export const getCertificationById = (
  id: number
): Promise<SingleCertificationResponse> => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${encodeURIComponent(
        id
      )}/release_dates`,
      {
        params: { api_key: key },
      }
    )
    .then((response) => response.data);
};

export const getMovieBySearch = (
  search: string
): Promise<MultipleMovieResponse> => {
  return axios
    .get(`https://api.themoviedb.org/3/search/movie`, {
      params: { query: search, api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

export const getMovieByFilter = (
  certificationCountry: string | null = "US",
  certification?: string | null,
  // genre?: number[],
  userRating?: number | null
): Promise<MultipleMovieResponse> => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params: {
      api_key: key,
      certification,
      certification_country: certificationCountry,
      // genre_ids: genre,
      "vote_average.gte": userRating,
    },
  });
};
