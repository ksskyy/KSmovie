const API_KEY = process.env.MOVIE_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const Requests = {
  fetchTrending: `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc`,
  fetchNowPlaying: `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}&include_adult=false&include_video=false`,
  fetchPopular: `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchTopRated: `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&include_adult=false&include_video=false`,
  fetchUpcoming: `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`,
};
export { API_KEY, TMDB_BASE_URL };
export default Requests;
