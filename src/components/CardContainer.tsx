import Movie from "../models/Movie";
import Card from "./Card";
import "./CardContainer.css";

interface Props {
  movies: Movie[];
}

const CardContainer = ({ movies }: Props) => {
  return (
    <div className="CardContainer">
      {movies.map((movie, index) => (
        <Card movie={movie} key={index} />
      ))}
    </div>
  );
};

export default CardContainer;
