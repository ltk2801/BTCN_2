export default {
  data() {
    return {};
  },
  template: `
    <nav class="navbar bg-light text-dark bg-darkmode">
        <div class="container-fluid ">
          <div class="navbar-brand bg-darkmode" id="homebtn" >Home</div>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success"
              type="button"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    `,
};
