const { reactive } = Vue;
import Movie from "./movie.js";

export default reactive({
  newFilms: [],
  popularFilms: [],
  ratingFilms: [],
  curP: null,
});
