const mapper = movies => {
  return movies.map(movie => ({
    title: movie.title,
    id: movie.id,
  }));
};

export default mapper;
