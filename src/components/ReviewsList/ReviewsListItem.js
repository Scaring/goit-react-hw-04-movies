import React, { Fragment } from 'react';
import T from 'prop-types';

const ReviewsListItem = ({ author, content }) => {
  return (
    <Fragment>
      <h3>Author:{author}</h3>
      <p>{content}</p>
    </Fragment>
  );
};

ReviewsListItem.propTypes = {
  author: T.string.isRequired,
  content: T.string.isRequired,
};

export default ReviewsListItem;
