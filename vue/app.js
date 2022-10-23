import newDatas from "./InTheaters.json" assert { type: "json" };
import popularDatas from "./MostPopular.json" assert { type: "json" };
import ratingDatas from "./250movies.json" assert { type: "json" };

import voH from "./header.js";
import voN from "./navbar.js";
import voM from "./main.js";
import voF from "./footer.js";
import store from "./store.js";
import movie from "./movie.js";
import voDp from "./detailMain.js";
import voAp from "./actorMain.js";
import actor from "./actor.js";

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
  },
  methods: {
    async loadNew() {
      // Code call API
      //   const res = await fetch(
      //     "https://imdb-api.com/en/API/InTheaters/k_w6h25qw5"
      //   );
      //   const rs = await res.json();
      //   const totalData = rs.items.slice(0, 5);
      const totalData = newDatas.items.slice(0, 5);
      store.newFilms = totalData.map((obj) => new movie(obj));
      this.curMain = "voM";
    },
    async loadPopular() {
      const totalData = popularDatas.items.slice(0, 15);
      store.popularFilms = totalData.map((obj) => new movie(obj));
      this.curMain = "voM";
    },
    async loadRating() {
      const totalData = ratingDatas.items.slice(0, 15);
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
      console.log(id);
      const res = await fetch(
        `https://imdb-api.com/en/API/Name/k_ed0315j1/${id}`
      );
      const rs = await res.json();
      store.curA = new actor(rs);
      console.log(store.curA);
      this.curMain = "voAp";
    },
  },
  mounted() {
    this.loadNew();
    this.loadPopular();
    this.loadRating();
  },
  template: `
        <voH />
        <voN @home="loadNew" />
        <component :is="curMain"  @submitID = 'getIdMovie' @selectIdActor ="getIdActor" @selectIdMovie="getIdMovie"  ></component>
        <voF />
    `,
};

//
