import Genre from "./Genre";

export default interface MovieDetails {
  overview: string;
  id: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  runtime: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
}
