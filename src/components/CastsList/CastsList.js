import React from 'react';
import T from 'prop-types';
import CastsListItem from './CastsListItem';

const CastsList = ({ casts }) => {
  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.cast_id}>
          <CastsListItem {...cast} />
        </li>
      ))}
    </ul>
  );
};

CastsList.propTypes = {
  casts: T.arrayOf(
    T.shape({
      name: T.string.isRequired,
      character: T.string.isRequired,
      profile: T.string.isRequired,
      id: T.number,
    }),
  ),
};

export default CastsList;
