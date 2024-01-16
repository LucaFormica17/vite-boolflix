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
            JP,
            hover: false
        }
    },
    props:{
        media: Object
    },
    created() {
        this.fullStars();   
    },
    methods: {
        fullStars(){
            if (this.media.vote_average < 2) {
                
            }
        }
    },
    
}
</script>
<template lang="">
        <div class="rotate-card" @mouseover="this.hover = true" @mouseleave="this.hover = false">
            <div class="movie-cover" :class="this.hover === true ? 'rotate' : ''">
                <img class="cover" :src="media.poster_path == null ? 'https://www.batteryworld.com.au/app/img/no_image_available.jpeg?resizeid=4&resizeh=800&resizew=800' : `http://image.tmdb.org/t/p/w500${media.poster_path}`" :alt="media.title">
            </div>

            <div class="movie-card" :class="this.hover === true ? 'rotate' : ''">
                <h3>{{media.title}}{{media.name}}</h3>
                <img v-if="media.original_language === 'en' ? media.original_language = 'gb' : media.original_language = media.original_language" :src="`/node_modules/country-flag-icons/1x1/${media.original_language.toUpperCase()}.svg`" :alt="media.original_language">
                <p>{{media.original_title}}{{media.original_name}}</p>
                <p>{{media.vote_average}}</p>
            </div>  
        </div>
    
</template>
<style lang="scss" scoped>
@use './styles/generals.scss';
@use './styles/partials/variables' as*;

    .rotate-card{
        width: calc(100% / 4 - 10px);
        margin: 10px 5px;
        height: 450px;
        cursor: pointer;
        position: relative;

        .movie-cover{
            transform: perspective(600px) rotateY(0deg);
            backface-visibility: hidden;
            transition: all 0.5s linear 0s;

            &.rotate{
                transform: perspective(1600px) rotateY(-180deg);
            }
            .cover{
                width: 100%;
                height: 450px;
                margin: 0;
            }
    
        }
        .movie-card{
            width: 100%;
            height: 100%;
            background-color: black;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: perspective(1600px) rotateY(180deg);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            backface-visibility: hidden;
            transition: all 0.5s linear 0s;

            &.rotate{
                transform: perspective(600px) rotateY(0deg);
            }
    
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
    }
    
</style>