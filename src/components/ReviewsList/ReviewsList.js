import React, { Component } from 'react';
import T from 'prop-types';
import * as movieAPI from '../../services/movies-api';

import ReviewsListItem from './ReviewsListItem';

export default class ReviewsList extends Component {
  static propTypes = {
    id: T.number.isRequired,
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    const { id } = this.props;

    movieAPI.getMovieReviews(id).then(data => {
      this.setState({ reviews: data.results });
    });
  }

  render() {
    const { reviews } = this.state;

    return reviews.length !== 0 ? (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <ReviewsListItem {...review} />
          </li>
        ))}
      </ul>
    ) : (
      <p>We dont have any reviews for this movie.</p>
    );
  }
}
