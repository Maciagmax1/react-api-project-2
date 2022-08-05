import { link } from "fs";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GenresContext from "../context/GenresContext";
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
  }, []);

  const getAllGenres = (array: number[]): any[] => {
    return array.map((id) => {
      const name: string | undefined = genres.find(
        (item) => item.id === id
      )?.name;
      return <li>{name}</li>;
    });
  };

  return (
    <>
      <li className="Card">
        <Link to={`/movies/${encodeURIComponent(movie.id)}/details`}>
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={movie.title}
          />
        </Link>
        <p>{movie.release_date.substring(0, 4)}</p>
        <ul>{getAllGenres(movie.genre_ids).slice(0, 3)}</ul>
        <h2>{movie.title}</h2>
        <p>{movie.vote_average}</p>
        {certification?.certification ? (
          <p>{certification?.certification}</p>
        ) : (
          <p>No US Rating</p>
        )}
      </li>
    </>
  );
};

export default Card;
