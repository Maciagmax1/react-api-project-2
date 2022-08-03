import { useContext } from "react";
import GenresContext from "../context/GenresContext";
import Movie from "../models/Movie";
import "./Card.css";

interface Props {
  movie: Movie;
}

const Card = ({ movie }: Props) => {
  const { genres } = useContext(GenresContext);

  const getThreeGenres = (array: number[]): any[] => {
    // const newArray = array.slice(0, 3);
    // for (let i = 0; i < newArray.length; i++) {
    //   for (let genre of genres) {
    //     // if (genre.id === newArray[i]) {
    //     //   return genre.name;
    //     // }
    //   }
    // }
    return array.map((id) => {
      const name: string | undefined = genres.find(
        (item) => item.id === id
      )?.name;
      return <li>{name}</li>;
    });
  };

  return (
    <li className="Card">
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.release_date.substr(0, 4)}</p>
      <h2>{movie.title}</h2>
      {/* <p>{getThreeGenres(movie.genre_ids)}</p> */}
      {getThreeGenres(movie.genre_ids).slice(0, 3)}
    </li>
  );
};

export default Card;
