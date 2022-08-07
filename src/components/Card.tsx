import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GenresContext from "../context/GenresContext";
import WatchListContext from "../context/WatchListContext";
import Movie from "../models/Movie";
import SingleCertificationResponse, {
  Certification,
  CertificationList,
} from "../models/SingleCertificationResponse";
import { getCertificationById } from "../services/MovieService";
import "./Card.css";

interface Props {
  movie: Movie;
}

const Card = ({ movie }: Props) => {
  const { genres } = useContext(GenresContext);

  const id: string | undefined = useParams().id;

  const [certification, setCertification] = useState<Certification | null>(
    null
  );
  const { watchList, addToWatchList, removeFromWatchList, isInWatchList } =
    useContext(WatchListContext);

  useEffect(() => {
    getCertificationById(movie.id!).then((response) => {
      const resultsIndex = response.results.findIndex(
        (item) => item.iso_3166_1 === "US"
      );
      const releaseDatesIndex = response.results[
        resultsIndex
      ].release_dates.findIndex((item) => item.certification);
      setCertification(
        response.results[resultsIndex].release_dates[releaseDatesIndex]
      );
    });
  }, [movie.id]);

  const getAllGenres = (array: number[]): any[] => {
    return array.map((id) => {
      const name: string | undefined = genres.find(
        (item) => item.id === id
      )?.name;
      return <li>{name}</li>;
    });
  };

  const movieHasReleaseYear = movie.hasOwnProperty("release_date");

  const releaseYear = movieHasReleaseYear
    ? movie.release_date.split("-")
    : null;

  return (
    <>
      <li className="Card">
        <div className="poster-bookmark">
          <Link to={`/movies/${encodeURIComponent(movie.id)}/details`}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
          {isInWatchList(movie.id) ? (
            <i
              className="fa-solid fa-bookmark fa-3x"
              onClick={() => removeFromWatchList(movie.id)}
            ></i>
          ) : (
            <i
              className="fa-regular fa-bookmark fa-3x"
              onClick={() => addToWatchList(movie)}
            ></i>
          )}
        </div>
        <div className="info">
          {releaseYear ? <p>{releaseYear[0]}</p> : <p>nothing</p>}
          {certification?.certification ? (
            <p>{certification?.certification}</p>
          ) : (
            <p>No US Rating</p>
          )}
        </div>

        <ul>{getAllGenres(movie.genre_ids).slice(0, 3)}</ul>
        <div className="title">
          <h2>{movie.title}</h2>
        </div>
        <div className="vote-average">
          <i className="fa-solid fa-star"></i>
          <p>{movie.vote_average}</p>
        </div>
      </li>
    </>
  );
};

export default Card;
