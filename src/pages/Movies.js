import React, { Component } from 'react';
import T from 'prop-types';

import Search from '../components/Search/Search';
import MoviesList from '../components/MoviesList/MoviesList';
import * as movieAPI from '../services/movies-api';
import mapper from '../services/mapper';

export default class Movies extends Component {
  static propTypes = {
    history: T.object.isRequired,
    location: T.object.isRequired,
  };

  state = { movies: null, query: '' };

  componentDidMount() {
    const adressLineSearchParam = this.props.location.search.split('=')[1];
    adressLineSearchParam &&
      movieAPI.getMoviByQuery(adressLineSearchParam).then(data => {
        this.setState({
          movies: mapper(data.results),
        });
      });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;

    movieAPI
      .getMoviByQuery(query)
      .then(data => {
        this.setState({
          movies: mapper(data.results),
        });
      })
      .then(() =>
        this.props.history.replace({
          pathname: this.props.location.pathname,
          search: `query=${query}`,
        }),
      )
      .finally(() => this.setState({ query: '' }));
  };

  render() {
    const { movies, query } = this.state;

    return (
      <div>
        <Search
          onChange={this.handleChange}
          onSearch={this.handleSubmit}
          query={query}
        />
        {movies && (
          <MoviesList movies={movies} from={this.props.location.search} />
        )}
      </div>
    );
  }
}
