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
    test(n) {
      console.log(n);
      this.curMain = "voDp";
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
        <component :is="curMain"  @submitID = 'test' ></component>
        <voF />
    `,
};
