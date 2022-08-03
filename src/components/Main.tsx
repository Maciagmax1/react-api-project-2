import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import { getPopularMovies } from "../services/MovieService";
import CardContainer from "./CardContainer";
import "./Main.css";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies().then((response) => {
      setMovies(response.results);
    });
  }, []);
  return (
    <div className="Main">
      <CardContainer movies={movies} />
    </div>
  );
};

export default Main;
