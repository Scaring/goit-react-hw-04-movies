import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import T from 'prop-types';

import * as movieAPI from '../services/movies-api';
import Movie from '../components/Movie/Movie';
import CastsList from '../components/CastsList/CastsList';
import ReviewsList from '../components/ReviewsList/ReviewsList';

const getIdFromProps = props => props.match.params.movieId;

const transformMovie = movie => {
  return {
    imageURL:
      movie.poster_path === null
        ? 'https://consaltliga.com.ua/wp-content/themes/consultix/images/no-image-found-360x250.png'
        : `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    title: movie.title,
    release_date:
      movie.release_date !== '' ? `(${movie.release_date.split('-')[0]})` : '',
    id: movie.id,
    genres: movie.genres
      .map(item => {
        return item.name.toLowerCase();
      })
      .join(', '),
    overview: movie.overview,
    score: `${movie.vote_average * 10}%`,
  };
};

const transformCast = casts => {
  return casts.map(cast => ({
    cast_id: cast.cast_id,
    character: cast.character,
    name: cast.name,
    profile:
      cast.profile_path === null
        ? 'https://consaltliga.com.ua/wp-content/themes/consultix/images/no-image-found-360x250.png'
        : `https://image.tmdb.org/t/p/w500${cast.profile_path}`,
  }));
};

export default class Details extends Component {
  static propTypes = {
    history: T.object.isRequired,
    location: T.object.isRequired,
  };

  state = { movie: {}, casts: null, reviews: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);

    movieAPI.getMovieWithId(id).then(data => {
      this.setState({ movie: transformMovie(data) });
    });

    movieAPI.getMovieCasts(id).then(data => {
      this.setState({ casts: transformCast(data.cast) });
    });

    movieAPI.getMovieReviews(id).then(data => {
      this.setState({ reviews: data.results });
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
    const { movie, casts, reviews } = this.state;

    return (
      <Fragment>
        <Movie
          {...movie}
          from={this.props.location.state.from}
          onGoback={this.handleGoback}
        />
        {casts && (
          <Route
            path={`/movies/${movie.id}/casts`}
            render={() => <CastsList casts={casts} />}
          />
        )}
        {reviews && (
          <Route
            path={`/movies/${movie.id}/reviews`}
            render={() => <ReviewsList reviews={reviews} />}
          />
        )}
      </Fragment>
    );
  }
}
