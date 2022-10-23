import actor from "./actor.js";
import store from "./store.js";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    selectIdMovie() {},
  },
  template: `<div class="row my-4">
  <div class="col-4 align-self-baseline">
    <img
      :src="store.curA.img"
      :alt="store.curA.id"
      class="rounded img-detail"
    />
  </div>
  <div class="col-8">
    <h2 class="fw-bold">{{store.curA.name}}</h2>
    <p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-calendar"
        viewBox="0 0 16 16"
      >
        <path
          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
        />
      </svg>
      &nbsp; {{store.curA.birth}}
    </p>
    <h3 class="fw-bold">Tiểu sử</h3>
    <p>
      {{store.curA.sum}}
    </p>
    <h3 class="fw-bold">Giải thưởng</h3>
    <p>
     {{store.curA.awards}}
    </p>
    <h3 class="fw-bold my-4">Danh sách phim tham gia bởi diễn viên : {{store.curA.name}}</h3>
    <div class="grid-popular-film">
      <div v-for="m in store.curA.know" :key="m.id" >
        <img
          :src="m.image"
          :alt="m.id"
          class="img-popular-film"
          @click="$emit('selectIdMovie',m.id)"
        />
        <h6 class="text-center">
          <span> {{m.title}}</span> <br />
          <span> (Tham gia trong vai {{m.role}}) </span>
        </h6>
      </div>
    </div>
  </div>
</div>`,
};
