import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../models/Movie";
import MovieDetails from "../models/MovieDetails";
import { getMovieById } from "../services/MovieService";
import Card from "./Card";
import "./Details.css";

const Details = () => {
  const id: string | undefined = useParams().id;

  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    getMovieById(id!).then((response) => {
      console.log(response);
      setMovie(response);
    });
  }, []);
  return (
    <div className="Details">
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
        </>
      )}
    </div>
  );
};

export default Details;
