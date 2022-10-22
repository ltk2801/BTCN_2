import datas from "./MostPopular.json" assert { type: "json" };
import movie from "./movie.js";

export default {
  data() {
    return {
      movies: [],
      // Đặt biến để thực hiện việc phân trang
      perPage: 3,
      currentPage: 1,
      start: 0,
      end: 1,
      totalPage: 15 / 3,
    };
  },
  methods: {
    async load() {
      //   const res = await fetch(
      //     "https://imdb-api.com/en/API/InTheaters/k_w6h25qw5"
      //   );
      //   const rs = await res.json();
      //   const totalData = rs.items.slice(0, 15);
      //   this.movies = totalData.map((obj) => new Movie(obj));
      //   console.log(this.start, this.end);
      //   this.end = this.perPage;
      const totalData = datas.items.slice(0, 15);
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
    <div>
    <h3 class="m-0">Most Popular</h3>

    <div class="row">
      <div class="col-1 d-flex justify-content-center align-items-center">
        <div @click="leftClick()">
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
            <a class="is-active" @click="changePage(1)"><li></li></a>
            <a @click="changePage(2)"><li></li></a>
            <a @click="changePage(3)"><li></li></a>
            <a @click="changePage(4)"><li></li></a>
            <a @click="changePage(5)"><li></li></a>
          </ul>
        </div>
        <div class="grid-popular-film">
        <template v-for="(m,index) in movies" :key="m.id">
          <span v-if="(index >= start) && (index < end)">
          <div class='movie'>
            <img
              :src="m.img"
              :alt="m.title"
              class="img-popular-film img-fluid"
            />
            <div class="movie-over">
              <h4>{{m.title}}</h4>
              <h5> Rating: {{m.rating }} / 10</h5>
            </div>
          </div>
          </span>
          </template>
         
        </div>
      </div>
      <div class="col-1 d-flex justify-content-center align-items-center">
        <div @click="rightClick()">
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

{
  /* <div>
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
</div> */
}
