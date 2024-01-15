import {reactive} from "vue";

export const store = reactive ({
    apiKey: '?api_key=596f37d635e895d395769f6ae4f6791d',
    apiMovieUrl: 'https://api.themoviedb.org/3/search/movie',
    apiSeriesURL: 'https://api.themoviedb.org/3/search/tv',
    apiQuery: '&query=',
    moviesList: [],
    seriesList: [],
    movieSearch: '',
});