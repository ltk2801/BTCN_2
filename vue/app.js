import voH from "./header.js";
import voN from "./navbar.js";
import voM from "./main.js";
import voF from "./footer.js";

export default {
  data() {
    return {};
  },

  components: {
    voH,
    voN,
    voM,
    voF,
  },
  template: `
        <voH />
        <voN />
        <voM />
        <voF />
    `,
};
