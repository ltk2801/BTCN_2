import voNew from "./newFilm.js";
import voP from "./popularFilm.js";
import voMost from "./mostFilm.js";

export default {
  data() {
    return {};
  },

  components: {
    voNew,
    voP,
    voMost,
  },

  template: `
    <div>
        <voNew />
        <voP />
        <voMost />
        </div>
    `,
};
