export default {
  data() {
    return {
      check: false,
    };
  },
  methods: {
    toggleDarkMode() {
      $(".bg-darkmode").toggleClass("dark-mode");
      $("div.container").toggleClass("dark-mode-container");
      $("body").toggleClass("bg-secondary");
    },
  },
  template: `
    <div class="alert bg-light text-dark fw-bold grid-header bg-darkmode">
    <div style="align-self: center"><h4>&lt; 1712522 &gt;</h4></div>
    <div style="align-self: center; justify-self: center">
      <h1>Movies info</h1>
    </div>
    <div
      style="
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        align-items: flex-end;
      "
    >
      <h4>&lt; k_ed0315j1 &gt;</h4>
      <h4 class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          v-model="check"
          @change="toggleDarkMode"
    
          
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >Dark mode</label
        >
      </h4>
    </div>
  </div>
    `,
};
