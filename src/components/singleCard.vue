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
            hover: false,
            stars: []
        }
    },
    props:{
        media: Object
    },
    
}
</script>
<template lang="">
        <div class="rotate-card" @mouseover="this.hover = true" @mouseleave="this.hover = false">
            <div class="movie-cover" :class="this.hover === true ? 'rotate' : ''">
                <img class="cover" :src="media.poster_path == null ? 'https://www.batteryworld.com.au/app/img/no_image_available.jpeg?resizeid=4&resizeh=800&resizew=800' : `http://image.tmdb.org/t/p/w500${media.poster_path}`" :alt="media.title">
            </div>

                

            <div class="movie-card" :class="this.hover === true ? 'rotate' : ''">
                <ul class="list-unstyled">
                    <li>
                        <h5><strong>Titolo:</strong> {{media.title}}{{media.name}}</h5>
                    </li>
                    <li>
                        <p><strong>Titolo originale:</strong> {{media.original_title}}{{media.original_name}}</p>
                    </li>
                    <li><strong class="text-white">Paese di origine:</strong> 
                        <img v-if="media.original_language === 'en' ? media.original_language = 'gb' : media.original_language = media.original_language" :src="`/node_modules/country-flag-icons/1x1/${media.original_language.toUpperCase()}.svg`" :alt="media.original_language">
                    </li>
                    <li>
                        <p><strong>Valutazione: </strong>
                            <i class="fa-star" :class="media.vote_average/2 >= 1 ? 'fa-solid' : 'fa-regular'"></i>
                            <i class="fa-star" :class="media.vote_average/2 >= 2 ? 'fa-solid' : 'fa-regular'"></i>
                            <i class="fa-star" :class="media.vote_average/2 >= 3 ? 'fa-solid' : 'fa-regular'"></i>
                            <i class="fa-star" :class="media.vote_average/2 >= 4 ? 'fa-solid' : 'fa-regular'"></i>
                            <i class="fa-star" :class="media.vote_average/2 == 5 ? 'fa-solid' : 'fa-regular'"></i>
                        </p>
                    </li>
                    <li>
                        <p><strong>Overview: </strong>
                            {{media.overview}}
                        </p>
                    </li>
                </ul>
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
            transform: perspective(1600px) rotateY(180deg);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            backface-visibility: hidden;
            transition: all 0.5s linear 0s;
            overflow-y: auto;

            &.rotate{
                transform: perspective(600px) rotateY(0deg);
            }

            li{
                margin: 5px auto;


                h5{
                    color: $red_flix;
                }
        
                img{
                    width: 80px;
                    height: 40px;
                    
                }
        
                p{
                    color: white;
    
                    i{
                        color: white;
                    }
                }
            }
    
        }
    }
    
</style>