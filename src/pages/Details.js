import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import T from 'prop-types';

import * as movieAPI from '../services/movies-api';
import { transformMovie } from '../services/trasformers';

import Movie from '../components/Movie/Movie';
import CastsList from '../components/CastsList/CastsList';
import ReviewsList from '../components/ReviewsList/ReviewsList';

const getIdFromProps = props => props.match.params.movieId;

export default class Details extends Component {
  static propTypes = {
    history: T.object.isRequired,
    location: T.object.isRequired,
  };

  state = { movie: {} };

  componentDidMount() {
    const id = getIdFromProps(this.props);

    movieAPI.getMovieWithId(id).then(data => {
      this.setState({ movie: transformMovie(data) });
    });
  }

  handleGoback = e => {
    e.preventDefault();
    const prevPageQuery = this.props.location.state.from;
    prevPageQuery
      ? this.props.history.push(`/movies${prevPageQuery}`)
      : this.props.history.push('/');
  };

  render() {
    const { movie } = this.state;

    return (
      <Fragment>
        <Movie
          {...movie}
          from={this.props.location.state.from}
          onGoback={this.handleGoback}
        />

        <Route
          path={`/movies/${movie.id}/casts`}
          render={() => <CastsList id={movie.id} />}
        />

        <Route
          path={`/movies/${movie.id}/reviews`}
          render={() => <ReviewsList id={movie.id} />}
        />
      </Fragment>
    );
  }
}
