import voNew from "./newFilm.js";
import voP from "./popularFilm.js";
import voT from "./topFilm.js";
import store from "./store.js";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    voNew,
    voP,
    voT,
  },

  methods: {
    test(id) {
      // console.log(id);
      // store.idFilm = id;
      // console.log(store.idFilm);
      this.$emit("submitID", id);
    },
  },

  template: ` <div>
  <voNew  @select="test" />
  <voP    @select="test" />
  <voT    @select="test" />
  </div>`,
};
