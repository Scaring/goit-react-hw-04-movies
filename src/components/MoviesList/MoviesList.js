import React, { Component } from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

export default class MoviesList extends Component {
  static propTypes = {
    movies: T.arrayOf(
      T.shape({
        title: T.string.isRequired,
        id: T.number.isRequired,
      }),
    ),
    from: T.string,
  };

  render() {
    const { movies } = this.props;

    return (
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: this.props.from },
                }}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
