import React, { Fragment } from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Movie.module.css';

const Movie = ({
  imageURL,
  title,
  release_date,
  id,
  overview,
  score,
  genres,
  from,
  onGoback,
}) => {
  return (
    <Fragment>
      <button type="button" onClick={onGoback}>
        Go back
      </button>
      <div id={id} className={s.movieCard}>
        <img className={s.poster} width="200px" src={imageURL} alt={title} />
        <div className={s.mainInfo}>
          <h1>
            {title} {release_date}
          </h1>
          <span>User score: {score}</span>
          <h2>Ovwrview</h2>
          <span>{overview}</span>
          <h2>genres</h2>
          <span>{genres}</span>
        </div>
      </div>
      <div className={s.addInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link
              to={{
                pathname: `/movies/${id}/casts`,
                state: { from: from },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/movies/${id}/reviews`,
                state: { from: from },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

Movie.propTypes = {
  imageURL: T.string,
  title: T.string,
  release_date: T.string,
  id: T.number,
  overview: T.string,
  score: T.string,
  genres: T.string,
  from: T.string,
  onGoback: T.func.isRequired,
};

export default Movie;
