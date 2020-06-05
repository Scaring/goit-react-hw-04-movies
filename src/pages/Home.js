import React, { Component } from 'react';
import * as movieAPI from '../services/movies-api';
import MoviesList from '../components/MoviesList/MoviesList';
import mapper from '../services/mapper';

export default class Home extends Component {
  state = { movies: [] };

  componentDidMount() {
    movieAPI.getPopularMovies().then(response => {
      this.setState({
        movies: mapper(response.data.results),
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
