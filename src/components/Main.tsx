import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Movie from "../models/Movie";
import { getMovieBySearch, getPopularMovies } from "../services/MovieService";
import CardContainer from "./CardContainer";
import "./Main.css";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("query");

  useEffect(() => {
    if (search) {
      getMovieBySearch(search).then((response) => {
        setMovies(response.results);
      });
    }
    //     else if() {
    // }
    else {
      getPopularMovies().then((response) => {
        setMovies(response.results);
      });
    }
  }, [search]);

  return (
    <div className="Main">
      <CardContainer movies={movies} />
    </div>
  );
};

export default Main;
