<script>
import { IT } from '/node_modules/country-flag-icons/string/1x1';
import { GB } from '/node_modules/country-flag-icons/string/1x1';
import { US } from '/node_modules/country-flag-icons/string/1x1';
import { FR } from '/node_modules/country-flag-icons/string/1x1';
import { ES } from '/node_modules/country-flag-icons/string/1x1';
import { JP } from '/node_modules/country-flag-icons/string/1x1';



export default {
    data() {
        return {
            IT,
            GB,
            US,
            FR,
            ES,
            JP
        }
    },
    props:{
        media: Object
    },
    
}
</script>
<template lang="">
    
        <div class="movie-card">
            <h3>{{media.title}}</h3>
            <img v-if="media.original_language === 'en' ? media.original_language = 'gb' : media.original_language = media.original_language" :src="`/node_modules/country-flag-icons/1x1/${media.original_language.toUpperCase()}.svg`" :alt="media.original_language">
            <p>{{media.original_title}}</p>
            <p>{{media.vote_average}}</p>
            
        </div>
    
</template>
<style lang="scss" scoped>
@use './styles/generals.scss';
@use './styles/partials/variables' as*;

    .movie-card{
        width: calc(100% / 4 - 10px);
        margin: 10px 5px;
        background-color: black;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3{
            color: $red_flix;
        }

        img{
            width: 80px;
            height: 40px;
            margin: 5px;
        }

        p{
            color: white;
        }
    }
    
</style>