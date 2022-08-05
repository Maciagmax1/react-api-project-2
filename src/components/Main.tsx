import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Movie from "../models/Movie";
import {
  getMovieByFilter,
  getMovieBySearch,
  getPopularMovies,
} from "../services/MovieService";
import CardContainer from "./CardContainer";
import "./Main.css";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("query");
  const certCountryFilter = searchParams.get("certification_country");
  const certFilter = searchParams.get("certification");
  const genreIdsFilter = searchParams.get("genre_ids");
  const voteAverageFilter = parseInt(searchParams.get("vote_average.gte")!);

  // useEffect(() => {
  //   if (search) {
  //     getMovieBySearch(search).then((response) => {
  //       setMovies(response.results);
  //     });
  //   } else if (certFilter && certCountryFilter) {
  //     getMovieByFilter(certCountryFilter, certFilter).then((response) => {
  //       console.log(response.results);
  //     });
  //   } else {
  //     getPopularMovies().then((response) => {
  //       setMovies(response.results);
  //       console.log(response.results);
  //     });
  //   }
  // }, [certFilter, certCountryFilter, search]);
  // // search, genreIdsFilter, voteAverageFilter

  useEffect(() => {
    if (search) {
      getMovieBySearch(search).then((response) => {
        setMovies(response.results);
      });
    } else if (voteAverageFilter) {
      getMovieByFilter(voteAverageFilter).then((response) => {
        setMovies(response.results);
      });
    } else {
      getPopularMovies().then((response) => {
        setMovies(response.results);
        console.log(response.results);
      });
    }
  }, [voteAverageFilter, search]);
  // search, genreIdsFilter, voteAverageFilter

  return (
    <div className="Main">
      <CardContainer movies={movies} />
    </div>
  );
};

export default Main;
