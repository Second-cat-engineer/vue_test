<template>
  <div>
    <BContainer>
      <h3 class="list-title">{{ listTitle }}</h3>
      <BRow>
        <template v-if="isExist">
          <BCol cols="3" v-for="(movie, key) in list" :key="key">
            <MovieItem
              :movie="movie"
              @mouseover.native="onMouseOver(movie.Poster)"
              @removeItem="onRemoveItem"
              @showModal="onShowMovieInfo"
            />
          </BCol>
        </template>
        <template v-else>
          <div>Empty list</div>
        </template>
      </BRow>

      <BModal
        ref="bv-modal-example"
        size="xl"
        hide-footer
        hide-header
      >
        <MovieInfoModalContent
          :movie="selectedMovie"
          @closeModal="onCloseModal"
        />
      </BModal>
    </BContainer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MovieItem from "@/components/MovieItem";
import MovieInfoModalContent from "@/components/MovieInfoModalContent";

export default {
  name: "MoviesList",
  components: {
    MovieItem,
    MovieInfoModalContent
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      selectedMovieID: ""
    };
  },
  computed: {
    ...mapGetters("moviesStore", ["isSearch"]),
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    listTitle() {
      return this.isSearch ? "Search result" : "IMDB Top 250";
    },
    selectedMovie() {
      return this.selectedMovieID ? this.list[this.selectedMovieID] : null;
    }
  },
  methods: {
    ...mapActions("moviesStore", ["removeMovie"]),
    ...mapActions(["showNotify"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure delete ${title}?`
      );
      if (isConfirmed) {
        this.removeMovie(id);
        this.showNotify({
          variant: "success",
          msg: "movie deleted",
          title: "Success"
        });
      }
    },
    onShowMovieInfo(id) {
      this.selectedMovieID = id;
      this.$refs["bv-modal-example"].show();
    },
    onCloseModal() {
      this.selectedMovieID = null;
      // this.$bvModal.hide(this.movieInfoModalID);
      // this.$bvModal.hide("bv-modal-example");
      this.$refs["bv-modal-example"].hide();
    }
  }
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
</style>
