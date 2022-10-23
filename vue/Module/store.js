const { reactive } = Vue;
import Movie from "./movie.js";
import Actor from "./actor.js";
import Search from "./movieSearch.js";

export default reactive({
  newFilms: [],
  popularFilms: [],
  ratingFilms: [],
  curP: null,
  curA: null,
  curS: null,
  curSa: null,
});
