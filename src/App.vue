<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from 'axios';
import { store } from './store.js'

export default {
  components:{
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    filterMovies(){
      store.moviesList = [];

      axios.get(store.apiMovieUrl += store.apiKey += store.apiQuery += store.movieSearch).then((response) =>{
      store.moviesList = response.data.results;
      });
    }
  },
}
</script>
<template lang="">
  <div>
    <AppHeader @filter_movies="filterMovies"/>
    <AppMain />
  </div>
</template>
<style lang="scss">
  @use './components/styles/generals.scss';

</style>