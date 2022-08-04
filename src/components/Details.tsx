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
          <p>{movie.release_date.substring(0, 3)}</p>
          {/* rating <p>{movie.}</p> */}
          <p>{movie.runtime}minutes</p>
          <p>{movie.vote_average}</p>
          <h2>{movie.title}</h2>
          <p>{movie.genres[0].name}</p>
          <p>{movie.overview}</p>
        </>
      )}
    </div>
  );
};

export default Details;
