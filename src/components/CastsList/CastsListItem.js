import React, { Fragment } from 'react';
import T from 'prop-types';

const CastsListItem = ({ name, character, profile }) => {
  return (
    <Fragment>
      <img src={profile} width="100px" alt={name} />
      <p>{name}</p>
      <p>Character: {character}</p>
    </Fragment>
  );
};

CastsListItem.propTypes = {
  name: T.string.isRequired,
  character: T.string.isRequired,
  profile: T.string.isRequired,
  id: T.number,
};

export default CastsListItem;
