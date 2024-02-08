const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const Requests = {
  fetchTrending: `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc`,
  fetchNowPlaying: `${TMDB_BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc`,
  fetchPopular: `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchTopRated: `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&include_adult=false&include_video=false`,
  fetchUpcoming: `${TMDB_BASE_URL}/movie/upcoming?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchVideos: (movieId) => {
    return `${TMDB_BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
  },
  fetchCasts: (movieId) => {
    return `${TMDB_BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  },
  fetchRecommendations: (movieId) => {
    return `${TMDB_BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US`;
  },
  fetchSearchResult: (query) => {
    return `${TMDB_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`;
  },
};

const fetchMovies = (requestUrl) => {
  return fetch(requestUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not OK.");
      }
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};
export { API_KEY, TMDB_BASE_URL, fetchMovies };
export default Requests;
