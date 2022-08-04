import { link } from "fs";
import { useContext } from "react";
import { Link } from "react-router-dom";
import GenresContext from "../context/GenresContext";
import Movie from "../models/Movie";
import "./Card.css";

interface Props {
  movie: Movie;
}

const Card = ({ movie }: Props) => {
  const { genres } = useContext(GenresContext);

  const getAllGenres = (array: number[]): any[] => {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      for (let genre of genres) {
        if (genre.id === array[i]) {
          filteredArray.push(<li>{genre.name}</li>);
        }
      }
    }
    return filteredArray;
    // return array.map((id) => {
    //   const name: string | undefined = genres.find(
    //     (item) => item.id === id
    //   )?.name;
    //   return <li>{name}</li>;
    // });
  };

  return (
    <li className="Card">
      <Link to={`/movies/${encodeURIComponent(movie.id)}/details`}>
        <img
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <p>{movie.release_date.substring(0, 4)}</p>
      {/* {getAllGenres(movie.genre_ids).slice(0, 3)} */}
      <ul>{getAllGenres(movie.genre_ids).slice(0, 3)}</ul>
      <h2>{movie.title}</h2>
      <p>{movie.vote_average}</p>
    </li>
  );
};

export default Card;
