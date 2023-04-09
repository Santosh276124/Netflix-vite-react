const API_KEY = "ea6f6b96683832b9a58509f279211124";

const requests = {
    fetchtrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRamanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries: `/trending/all/week?api_key=${API_KEY}&with_genres=99`,
    fetchGenres: `/genre/movie/list?&api_key=${API_KEY}`
};

export default requests;