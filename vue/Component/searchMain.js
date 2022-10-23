import movieSearch from "../Module/movieSearch.js";
import store from "../Module/store.js";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    searchIdActor() {},
    searchIdMovie() {},
  },
  template: `  <h2 class="fw-bold my-5">Kết quả tìm kiếm của : {{store.curS.search}}</h2>
  <div class="grid-popular-film">
    <div v-for="m in store.curS.results" :key="m.id">
      <img
        :src="m.image"
        :alt="m.id"
        class="img-popular-film"
        @click="$emit('searchIdMovie',m.id)"
      />
      <div
        class="text-center bg-white mt-1 border border-info text-dark p-3"
      >
        <h4>{{m.title}}</h4>
        <span> {{m.description}}</span>
      </div>
    </div>
   
  </div>
  <div class="grid-popular-film mt-4">
  <div v-for="a in store.curSa.results" :key="a.id">
    <img
      :src="a.image"
      :alt="a.id"
      class="img-popular-film"
      @click="$emit('searchIdActor',a.id)"
    />
    <div
      class="text-center bg-white mt-1 border border-info text-dark p-3"
    >
      <h4>{{a.title}}</h4>
      <span> {{a.description}}</span>
    </div>
  </div>
 
</div>
  
  `,
};
