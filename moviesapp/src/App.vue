<template>
  <div id="app">
    <Loader />
    <notification />
    <PosterBg :poster="posterBg" />
    <Header />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChange="onPageChanged"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";
import PosterBg from "@/components/PosterBg";
import MoviesPagination from "@/components/MoviesPagination";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Notification from "@/components/Notification";

export default {
  name: "App",
  data() {
    return {
      posterBg: ""
    };
  },
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
    Loader,
    Header,
    Notification
  },
  computed: {
    ...mapGetters("moviesStore", [
      "moviesList",
      "currentPage",
      "moviesPerPage",
      "moviesLength"
    ])
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep: true
    }
  },
  methods: {
    ...mapActions("moviesStore", ["changeCurrentPage"]),
    onPageQueryChange({ page = 1 }) {
      this.changeCurrentPage(Number(page));
    },
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } });
      // this.changeCurrentPage(page);
    }
  }
  // created() {
  //   if (this.$route.query.page) {
  //     this.changeCurrentPage(Number(this.$route.query.page));
  //   }
  // }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
