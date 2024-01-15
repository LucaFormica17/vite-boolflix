<script>
import { store } from '../store.js';

import singleCard from './singleCard.vue';
export default {
    components:{
        singleCard
    },
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
                    <h1>Film</h1>
                    <div class="cards-container">
                        <singleCard v-for="(movie, index) in store.moviesList" :key="index" :media="movie"/>
                    </div>
                    <h1>Serie Tv</h1>
                    <div class="cards-container">
                        <singleCard v-for="(movie, index) in store.seriesList" :key="index" :media="movie"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
    @use './styles/generals.scss';
    @use './styles/partials/variables' as*;


    h1{
        text-align: center;
        color: $red_flix;
        margin: 20px 0;
    }
    .cards-container{
        display: flex;
        flex-wrap: wrap;
    }
</style>