export default {
  data() {
    return {};
  },
  template: `
    <div class="grid-new-film my-3">
    <div style="align-self: center; justify-self: center">
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
    <div id="banner-film">
      <img
        src="https://m.media-amazon.com/images/M/MV5BNzQxNzQxNjk5NV5BMl5BanBnXkFtZTgwNTI4MTU0MzE@._V1_FMjpg_UX1000_.jpg"
        style="width: 100%"
        alt=""
      />
      <div id="info-film">
        <h4 class="title-film text-light text-center m-0">Naruto (2022)</h4>
        <div class="pagination p1">
          <ul>
            <a class="is-active" href="#"><li></li></a>
            <a href="#"><li></li></a>
            <a href="#"><li></li></a>
            <a href="#"><li></li></a>
            <a href="#"><li></li></a>
          </ul>
        </div>
      </div>
    </div>
    <div style="align-self: center; justify-self: center">
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
    `,
};
