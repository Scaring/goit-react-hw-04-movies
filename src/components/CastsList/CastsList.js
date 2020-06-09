import React, { Component } from 'react';
import T from 'prop-types';

import * as movieAPI from '../../services/movies-api';
import CastsListItem from './CastsListItem';

import { castsMapper } from '../../services/mappers';

export default class CastsList extends Component {
  static propTypes = {
    id: T.number.isRequired,
  };

  state = {
    casts: [],
  };

  componentDidMount() {
    const { id } = this.props;

    movieAPI.getMovieCasts(id).then(data => {
      this.setState({ casts: castsMapper(data.cast) });
    });
  }

  render() {
    const { casts } = this.state;

    return (
      <ul>
        {casts.map(cast => (
          <li key={cast.cast_id}>
            <CastsListItem {...cast} />
          </li>
        ))}
      </ul>
    );
  }
}
