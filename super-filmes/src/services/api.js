import axios from 'axios';

//base da URL= https://api.themoviedb.org/3/
//URL: Api= movie/now_playing?api_key=0417ff6e8b053516a32d921923984a60&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
