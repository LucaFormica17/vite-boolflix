import {reactive} from "vue";

export const store = reactive ({
    apiKey: '87cc577ca317d533d9b81bdec95e14fe',
    apiMovieUrl: 'https://api.themoviedb.org/3/search/movie',
    moviesList: [],
});