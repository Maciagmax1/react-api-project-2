import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import Movie from "../models/Movie";
import {
  getMovieByFilter,
  getMovieBySearch,
  getPopularMovies,
} from "../services/MovieService";
import CardContainer from "./CardContainer";
import "./Main.css";

const Main = () => {
  const filter = window.location.search;
  const params = new URLSearchParams(filter);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("query");
  const certCountryFilter = params.get("certification_country");
  const certFilter = params.get("certification");
  const genreIdsFilter = searchParams.get("genre_ids");
  const voteAverageFilter = parseInt(searchParams.get("vote_average.gte")!);

  useEffect(() => {
    if (search) {
      getMovieBySearch(search).then((response) => {
        setMovies(response.results);
      });
    } else if (certFilter || genreIdsFilter || voteAverageFilter) {
      getMovieByFilter(certCountryFilter, certFilter, voteAverageFilter).then(
        (response) => {
          setMovies(response.results);
        }
      );
    } else {
      getPopularMovies().then((response) => {
        setMovies(response.results);
      });
    }
  }, [search, certFilter, genreIdsFilter, voteAverageFilter]);

  return (
    <div className="Main">
      <CardContainer movies={movies} />
    </div>
  );
};

export default Main;
