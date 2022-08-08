import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Movie from "../models/Movie";
import {
  getMovieByFilter,
  getMovieBySearch,
  getPopularMovies,
} from "../services/MovieService";
import CardContainer from "./CardContainer";
import "./Main.css";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("query");

  const [ratingParams] = useSearchParams();
  const rating = parseInt(ratingParams.get(`vote_average.gte`)!);

  const [certParams] = useSearchParams();
  const certification = certParams.get("certification");

  const [certCountryParams] = useSearchParams();
  const certificationCountry = certCountryParams.get("certification_country");

  const [genresParams] = useSearchParams();
  const genres = parseInt(genresParams.get("with_genres")!);

  useEffect(() => {
    if (search) {
      getMovieBySearch(search).then((response) => {
        setMovies(response.results);
      });
    } else if (rating || (certification && certificationCountry) || genres) {
      if (genres === 0) {
        getMovieByFilter(rating, certification!, certificationCountry!).then(
          (response) => {
            setMovies(response.results);
          }
        );
      } else {
        getMovieByFilter(
          rating,
          certification!,
          certificationCountry!,
          genres
        ).then((response) => {
          setMovies(response.results);
        });
      }
    } else {
      getPopularMovies().then((response) => {
        setMovies(response.results);
      });
    }
  }, [search, rating, certification, certificationCountry, genres]);

  return (
    <div className="Main">
      <div className="hidden-header-div"></div>
      <CardContainer movies={movies} />
      <div className="hidden-footer-div"></div>
    </div>
  );
};

export default Main;
