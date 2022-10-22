export default {
  data() {
    return {};
  },
  template: `
    <div>
    <h3 class="m-0">Most Popular</h3>

    <div class="row">
      <div class="col-1 d-flex justify-content-center align-items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-chevron-left chevronL"
            viewBox="0 0 16 16"
            style="color: #8d99ae"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
      </div>
      <div class="col-10">
        <div class="pagination p1 d-flex justify-content-end">
          <ul>
            <a class="is-active" href="#"><li></li></a>
            <a href="#"><li></li></a>
            <a href="#"><li></li></a>
            <a href="#"><li></li></a>
            <a href="#"><li></li></a>
          </ul>
        </div>
        <div class="grid-popular-film">
          <div>
            <img
              src="https://m.media-amazon.com/images/M/MV5BMDI3ZDY4MDgtN2U2OS00Y2YzLWJmZmYtZWMzOTM3YWFjYmUyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
              alt=""
              class="img-popular-film img-fluid"
            />
          </div>
          <div>
            <img
              src="https://genk.mediacdn.vn/2019/4/11/anh-0-1554970993358362044281.jpg"
              alt=""
              class="img-popular-film img-fluid"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/M/MV5BZWI1MTkxMmQtNjgyZC00YjhhLTlhZGQtYzcwODg5MDkzMjYzXkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_.jpg"
              alt=""
              class="img-popular-film img-fluid"
            />
          </div>
        </div>
      </div>
      <div class="col-1 d-flex justify-content-center align-items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-chevron-right chevronR"
            viewBox="0 0 16 16"
            style="color: #8d99ae"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
    `,
};
