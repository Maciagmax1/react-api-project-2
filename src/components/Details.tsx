import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isTemplateExpression } from "typescript";
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

  const [videos, setVideos] = useState<TrailerList>();

  // const index: number = videos.findIndex((item) => item.type === "Trailer");

  // const { watchList, addToWatchList, removeFromWatchList, isInWatchList } =
  //   useContext(WatchListContext);

  useEffect(() => {
    getMovieById(id!).then((response) => {
      setMovie(response);
    });

    getMovieTrailer(id!).then((response) => {
      setVideos(response.results[0]);
    });
  }, [id]);

  const navigate = useNavigate();

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
      <div className="hidden-header-div"></div>
      {movie && (
        <div className="main-div">
          <div className="img-container">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <img
                src="https://bflix.biz/no-poster.png"
                alt="no-poster"
                className="no-poster"
              />
            )}
          </div>
          <i
            className="close-btn fa-solid fa-circle-xmark fa-2x"
            onClick={() => navigate(-1)}
          ></i>
          <div className="details-container">
            <div className="date-run-container">
              <p>{movie.release_date.substring(0, 4)}</p>
              <p>|</p>
              <p>{convertTime(parseInt(movie.runtime))}</p>
            </div>

            <div className="rating-title-container">
              <div className="vote-count-container">
                <span>
                  <i className="fa-solid fa-star fa-2x"></i>
                  <p>{movie.vote_average.toFixed(1)}</p>
                </span>
                <p className="vote-count-p">{movie.vote_count} votes</p>
              </div>

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
              href={`https://www.youtube.com/watch?v=${videos?.key}`}
              target="_blank"
            >
              <button>Clips</button>
            </a>
          </div>
        </div>
      )}
      <div className="hidden-footer-div"></div>
    </div>
  );
};

export default Details;
