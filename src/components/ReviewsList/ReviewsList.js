import React from 'react';
import T from 'prop-types';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = ({ reviews }) => {
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
};

ReviewsList.propTypes = {
  reviews: T.arrayOf(
    T.shape({
      author: T.string.isRequired,
      content: T.string.isRequired,
      id: T.string.isRequired,
      url: T.string,
    }),
  ),
};

export default ReviewsList;
