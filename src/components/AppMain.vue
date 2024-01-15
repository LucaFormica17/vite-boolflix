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
                    <div class="cards-container">
                        <singleCard v-for="(movie, index) in store.moviesList" :key="index" :media="movie"/>
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
    }
</style>