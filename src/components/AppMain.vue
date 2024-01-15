<script>
import { store } from '../store.js';

import singleCard from './singleCard.vue';
export default {
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="cards-container">
                        <div class="movie-card" v-for="(movie, index) in store.moviesList" :key="index">
                            {{movie.title}}
                            {{movie.original_title}}
                            {{movie.original_language}}
                            {{movie.vote_average}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
    @use './styles/generals.scss';

    .cards-container{
        display: flex;
        flex-wrap: wrap;

        .movie-card{
            width: calc(100% / 4 - 10px);
            margin: 10px 5px;
            background-color: white;
        }
    }
</style>