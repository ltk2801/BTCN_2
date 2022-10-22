// import Movie from "./movie.js";
import datas from "./InTheaters.json" assert { type: "json" };
import movie from "./movie.js";

export default {
  data() {
    return {
      movies: [],
      // Đặt biến để thực hiện việc phân trang
      perPage: 1,
      currentPage: 1,
      start: 0,
      end: 1,
      totalPage: 5 / 1,
    };
  },
  methods: {
    async load() {
      //   const res = await fetch(
      //     "https://imdb-api.com/en/API/InTheaters/k_w6h25qw5"
      //   );
      //   const rs = await res.json();
      //   const totalData = rs.items.slice(0, 5);
      //   this.movies = totalData.map((obj) => new Movie(obj));
      //   console.log(this.start, this.end);
      //   this.end = this.perPage;
      const totalData = datas.items.slice(0, 5);
      this.movies = totalData.map((obj) => new movie(obj));
      this.end = this.perPage;
    },
    // Hàm lấy ra trang hiện tại
    getCurrentPage(currentPage) {
      this.start = (currentPage - 1) * this.perPage;
      this.end = currentPage * this.perPage;
    },
    // Hàm khi ấn nút sang phải
    rightClick() {
      this.currentPage++;
      if (this.currentPage > this.totalPage) {
        this.currentPage = this.totalPage;
      }
      this.getCurrentPage(this.currentPage);
    },
    // Hàm khi ấn nút sang trái
    leftClick() {
      this.currentPage--;
      if (this.currentPage <= 1) {
        this.currentPage = 1;
      }
      this.getCurrentPage(this.currentPage);
    },
    // Hàm thực hiện việc khi click vào từng trang number
    changePage(n) {
      this.currentPage = n;
      this.getCurrentPage(this.currentPage);
    },
  },
  mounted() {
    this.load();
  },

  template: `
    <div class="grid-new-film my-3">
    <div style="align-self: center; justify-self: center" @click="leftClick()">
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
    <template v-for="(m,index) in movies" :key="m.id">
        <span v-if="(index >= start) && (index < end)">
        <img
        :src="m.img"
        :alt="m.title"
        class="poster-film"
      />
      <div class="d-flex flex-column align-items-center mt-3" id="info-film">
        <h2 class="title-film text-light text-center m-0">{{m.title}}</h2>
        <div class="pagination p1">
          <ul >
            <a class="is-active"  @click="changePage(1)"><li></li></a>
            <a  @click="changePage(2)"><li></li></a>
            <a  @click="changePage(3)"><li></li></a>
            <a  @click="changePage(4)"><li></li></a>
            <a  @click="changePage(5)"><li></li></a>
          </ul>
        </div>
      </div>
        </span>
    </template>
    </div>
    <div style="align-self: center; justify-self: center" @click="rightClick()">
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
