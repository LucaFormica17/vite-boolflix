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
                    <div class="movie-card text-white" v-for="(movie, index) in store.moviesList" :key="index">
                        {{movie.original_title}}
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
    
</style>