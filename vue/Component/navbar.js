export default {
  data() {
    return {
      str: "",
    };
  },
  methods: {
    homeHandle() {
      this.$emit("home");
    },
    searchHandleMovie() {
      this.$emit("searchMovie", this.str);
    },
  },
  template: `
    <nav class="navbar bg-light text-dark bg-darkmode">
        <div class="container-fluid ">
          <div class="navbar-brand bg-darkmode" id="homebtn" @click="homeHandle" >Home</div>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="str"
            />
            <button
              class="btn btn-outline-success"
              type="button"
              @click="searchHandleMovie"
        
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    `,
};
