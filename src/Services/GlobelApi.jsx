import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const api_key = "dd849598f23eb6a591f719bcd679aa6a";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=dd849598f23eb6a591f719bcd679aa6a";


 

// https://api.themoviedb.org/3/movie/upcoming?api_key=dd849598f23eb6a591f719bcd679aa6a&language=en-US&page=1

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL+"&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
