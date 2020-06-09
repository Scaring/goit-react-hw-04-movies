import React, { Component } from 'react';
import * as movieAPI from '../services/movies-api';
import MoviesList from '../components/MoviesList/MoviesList';
import { movieMapper } from '../services/mappers';

export default class Home extends Component {
  state = { movies: [] };

  componentDidMount() {
    movieAPI.getPopularMovies().then(results => {
      this.setState({
        movies: movieMapper(results),
      });
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h1> Home Page </h1>

        <MoviesList movies={movies} />
      </div>
    );
  }
}
