// import newDatas from "./InTheaters.json" assert { type: "json" };
// import popularDatas from "./MostPopular.json" assert { type: "json" };
// import ratingDatas from "./250movies.json" assert { type: "json" };

import voH from "./Component/header.js";
import voN from "./Component/navbar.js";
import voM from "./Component/main.js";
import voF from "./Component/footer.js";
import store from "./Module/store.js";
import movie from "./Module/movie.js";
import voDp from "./Component/detailMain.js";
import voAp from "./Component/actorMain.js";
import actor from "./Module/actor.js";
import searchMovie from "./Module/movieSearch.js";
import voSp from "./Component/searchMain.js";

export default {
  data() {
    return {
      store,
      curMain: "voM",
    };
  },

  components: {
    voH,
    voN,
    voM,
    voF,
    voDp,
    voAp,
    voSp,
  },
  methods: {
    async loadNew() {
      // Code call API
      const res = await fetch(
        "https://imdb-api.com/en/API/InTheaters/k_ed0315j1"
      );
      const rs = await res.json();
      const totalData = rs.items.slice(0, 5);
      store.newFilms = totalData.map((obj) => new movie(obj));
      this.curMain = "voM";
    },
    async loadPopular() {
      const res = await fetch(
        "https://imdb-api.com/en/API/MostPopularMovies/k_ed0315j1"
      );
      const rs = await res.json();
      const totalData = rs.items.slice(0, 15);
      store.popularFilms = totalData.map((obj) => new movie(obj));
      this.curMain = "voM";
    },
    async loadRating() {
      const res = await fetch(
        "https://imdb-api.com/en/API/Top250Movies/k_ed0315j1"
      );
      const rs = await res.json();
      const totalData = rs.items.slice(0, 15);
      store.ratingFilms = totalData.map((obj) => new movie(obj));
      this.curMain = "voM";
    },
    async getIdMovie(id) {
      const res = await fetch(
        `https://imdb-api.com/en/API/Title/k_ed0315j1/${id}/FullActor`
      );
      const rs = await res.json();
      store.curP = new movie(rs);
      this.curMain = "voDp";
    },
    async getIdActor(id) {
      const res = await fetch(
        `https://imdb-api.com/en/API/Name/k_ed0315j1/${id}`
      );
      const rs = await res.json();
      store.curA = new actor(rs);
      this.curMain = "voAp";
    },
    async getSearch(kw) {
      const res = await fetch(
        `https://imdb-api.com/en/API/SearchMovie/k_ed0315j1/${kw}`
      );
      const rs = await res.json();
      store.curS = new searchMovie(rs);
      const res1 = await fetch(
        `https://imdb-api.com/en/API/SearchName/k_ed0315j1/${kw}`
      );
      const rs1 = await res1.json();
      store.curSa = new searchMovie(rs1);
      this.curMain = "voSp";
    },
  },
  mounted() {
    this.loadNew();
    this.loadPopular();
    this.loadRating();
  },
  template: `
        <voH />
        <voN @home="loadNew" @searchMovie="getSearch"/>
        <component :is="curMain"  @submitID = 'getIdMovie' @selectIdActor ="getIdActor" @selectIdMovie="getIdMovie" @searchIdActor="getIdActor" @searchIdMovie="getIdMovie"  ></component>
        <voF />
    `,
};

//
