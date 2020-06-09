import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, from }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: from },
              }}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: T.arrayOf(
    T.shape({
      title: T.string.isRequired,
      id: T.number.isRequired,
    }),
  ),
  from: T.string,
};

export default MoviesList;
