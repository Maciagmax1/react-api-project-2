import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";

import MovieDetails from "../models/MovieDetails";
import { getMovieById } from "../services/MovieService";

import "./Details.css";

const Details = () => {
  const id: string | undefined = useParams().id;

  const [movie, setMovie] = useState<MovieDetails | null>(null);

  const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);

  useEffect(() => {
    getMovieById(id!).then((response) => {
      setMovie(response);
    });
  }, [id]);

  const convertTime = (time: number) => {
    let hour = Math.floor(time / 60);
    let minutes = time - hour * 60;
    if (hour == 1) {
      return `${hour} hour ${minutes} minutes`;
    } else {
      return `${hour} hours ${minutes} minutes`;
    }
  };

  return (
    <div className="Details">
      {movie && (
        <>
          <div className="poster-bookmark">
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.title}
            />
            {/* {isFav(movie.id) ? (
              <i
                className="fa-solid fa-bookmark fa-3x"
                onClick={() => removeFavorite(movie.id)}
              ></i>
            ) : (
              <i
                className="fa-regular fa-bookmark fa-3x"
                onClick={() => addFavorite(movie)}
              ></i>
            )} */}
          </div>
          <p>{movie.release_date.substring(0, 4)}</p>
          {/* rating <p>{movie.}</p> */}
          <p>{convertTime(parseInt(movie.runtime))}</p>
          <p>{movie.vote_average.toFixed(1)}</p>
          <h2>{movie.title}</h2>
          <ul>
            {movie.genres.map((genre) => (
              <li>{genre.name}</li>
            ))}
          </ul>
          <div className="movie-overview-container">
            <p>{movie.overview}</p>
            {/* <a href={`https://www.youtube.com/watch?v=${movie.}`} target="_blank"></a> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
