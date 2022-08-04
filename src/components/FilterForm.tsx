import "./FilterForm.css";

const FilterForm = () => {
  return (
    <form className="FilterForm">
      <select name="certification" id="certification">
        <option value="" disabled selected>
          Rating
        </option>
        <option value="1"></option>
        <option value="2">G</option>
        <option value="3">PG</option>
        <option value="4">PG-13</option>
        <option value="5">R</option>
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
      </select>
      <select name="user-rating" id="user-rating">
        <option value="" disabled selected>
          User Rating
        </option>
        <option value=""></option>
        <option value="">5+</option>
        <option value="">6+</option>
        <option value="">7+</option>
        <option value="">8+</option>
        <option value="">9+</option>
        <option value="">10</option>
      </select>
      <button>Filter</button>
    </form>
  );
};

export default FilterForm;
