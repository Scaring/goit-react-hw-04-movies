import React from 'react';
import T from 'prop-types';

const Search = ({ onChange, onSearch, query }) => {
  return (
    <form onSubmit={onSearch}>
      <input type="text" name="query" value={query} onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
};

Search.propTypes = {
  onChange: T.func.isRequired,
  onSearch: T.func.isRequired,
  query: T.string,
};

export default Search;
