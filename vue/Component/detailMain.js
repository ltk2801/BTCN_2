import movie from "../Module/movie.js";
import store from "../Module/store.js";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    selectIdActor() {},
  },
  template: ` <div class="row my-4">
  <div class="col-4">
    <img
      :src="store.curP.img"
      :alt="store.curP.id"
      class="rounded img-detail"
    />
  </div>
  <div class="col-8">
    <h2 class="fw-bold">{{store.curP.title}}</h2>
    <div class="row gap-2">
      <span class="col-4"><strong>Thể loại:</strong> {{store.curP.type}}</span>
      <span class="col-4"><strong>Năm sản xuất : </strong>{{store.curP.year}}</span>
      <span class="col-4"><strong>Thời lượng : </strong>{{store.curP.time}}</span>
      <span class="col-4"><strong>Đạo diễn : </strong>{{store.curP.directors}}</span>
      <span class="col-4"
        ><strong>Diễn viên : </strong> {{store.curP.stars}}</span
      >
      <span class="col-4"><strong>Điểm IMDb: </strong> {{store.curP.rating}} / 10 </span>
      <span class="col-12"
        ><strong>Giải thưởng: </strong>{{store.curP.awards}}</span
      >
      <span class="col-12"
        ><strong>Nội dung : </strong>{{ store.curP.plot}}</span
      >
      <span class="col-3 mt-3">
        <button type="button" class="btn btn-warning px-4 py-2">
          Xem Trailer
        </button>
      </span>
      <span class="col-3 mt-3">
        <button type="button" class="btn btn-warning px-4 py-2">
          Xem Phim
        </button>
      </span>
    </div>
  </div>
</div>
<h2>Một số diễn viên chính</h2>
<div class="grid-popular-film">
  <div v-for="(actor,index) in store.curP.actorList" :key="actor.id">
  <div v-if="index < 21">
    <img
      :src="actor.image"
      :alt="actor.id"
      class="img-popular-film"
      @click="$emit('selectIdActor',actor.id)"
    />
    <h6 class="text-center">
      <span> {{actor.name}} / </span>
      <span> {{actor.asCharacter}} </span>
    </h6>
  </div>
  </div>
  
  
  
  
</div> `,
};
