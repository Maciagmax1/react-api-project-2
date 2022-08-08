import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";

import MovieDetails from "../models/MovieDetails";
import SingleTrailerResponse, {
  TrailerList,
} from "../models/SingleTrailerResponse";
import { getMovieById, getMovieTrailer } from "../services/MovieService";

import "./Details.css";

const Details = () => {
  const id: string | undefined = useParams().id;

  const [movie, setMovie] = useState<MovieDetails | null>(null);

  const [video, setVideo] = useState<TrailerList>();

  const { watchList, addToWatchList, removeFromWatchList, isInWatchList } =
    useContext(WatchListContext);

  useEffect(() => {
    getMovieById(id!).then((response) => {
      setMovie(response);
    });

    getMovieTrailer(id!).then((response) => {
      setVideo(response.results[0]);
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
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={movie.title}
          />
          <div className=""></div>
          <p>{movie.release_date.substring(0, 4)}</p>
          {/* rating <p>{movie.}</p> */}
          <p>{convertTime(parseInt(movie.runtime))}</p>
          <div className="rating-title-container">
            <i className="fa-solid fa-star fa-2x"></i>
            <p>{movie.vote_average.toFixed(1)}</p>
            <h2>{movie.title}</h2>
          </div>
          <ul>
            {movie.genres.map((genre) => (
              <li>{genre.name}</li>
            ))}
          </ul>
          <div className="overview-container">
            <p>{movie.overview}</p>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${video?.key}`}
            target="_blank"
          >
            Link
          </a>
        </>
      )}
      <div className="hidden-div">hidden div</div>
    </div>
  );
};

export default Details;
