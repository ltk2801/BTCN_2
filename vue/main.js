import voNew from "./newFilm.js";
import voP from "./popularFilm.js";
import voT from "./topFilm.js";

export default {
  data() {
    return {};
  },

  components: {
    voNew,
    voP,
    voT,
  },

  template: `
    <div>
        <voNew />
        <voP />
        <voT />
        </div>
    `,
};
