import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = 'e43aacbce717b0db5400934d65a186a0';

export const getPopularMovies = () =>
  axios
    .get(
      `${BASE_URL}3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&region=UA`,
    )
    .then(resp => resp.data.results);

export const getMovieWithId = id => {
  return axios
    .get(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(resp => resp.data);
};

export const getMoviByQuery = query => {
  return axios
    .get(
      `${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${query
        .split(' ')
        .join('+')}&region=UA&language=en-US&page=1`,
    )
    .then(resp => resp.data);
};

export const getMovieCasts = id => {
  return axios
    .get(`${BASE_URL}3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(resp => resp.data);
};

export const getMovieReviews = id => {
  return axios
    .get(
      `${BASE_URL}3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    .then(resp => resp.data);
};
