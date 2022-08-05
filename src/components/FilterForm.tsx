import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FilterForm.css";

const FilterForm = () => {
  const navigate = useNavigate();

  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [voteAverage, setVoteAverage] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate(
      `/movies/filter?${new URLSearchParams({
        // certfication: rating,
        // certification_country: "US",
        "vote_average.gte": voteAverage,
      })}`
    );
  };

  return (
    <form className="FilterForm" onSubmit={(e) => handleSubmit(e)}>
      {/* <select
        name="certification"
        id="certification"
        // onChange={(e) => setRating(e.target.value)}
      >
        <option value="" disabled selected>
          Rating
        </option>
        <option value="1"></option>
        <option value="G">G</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        <option value="R">R</option>
      </select>
      <select name="genre" id="genre">
        <option value="" disabled selected>
          Genre
        </option>
        <option value=""></option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="99">Documentary</option>
        <option value="18">Drama</option>
        <option value="10751">Family</option>
        <option value="14">Fantasy</option>
        <option value="36">History</option>
        <option value="27">Horror</option>
        <option value="10402">Music</option>
        <option value="9648">Mystery</option>
        <option value="10749">Romance</option>
        <option value="878">Sci-fi</option>
        <option value="10770">TV Movie</option>
        <option value="53">Thriller</option>
        <option value="10752">War</option>
        <option value="37">Western</option>
      </select> */}
      <select
        name="user-rating"
        id="user-rating"
        onChange={(e) => setVoteAverage(e.target.value)}
      >
        <option value="" disabled selected>
          User Rating
        </option>
        <option value=""></option>
        <option value="5">5+</option>
        <option value="6">6+</option>
        <option value="7">7+</option>
        <option value="8">8+</option>
        <option value="9">9+</option>
        <option value="10">10</option>
      </select>
      <button>Filter</button>
    </form>
  );
};

export default FilterForm;
