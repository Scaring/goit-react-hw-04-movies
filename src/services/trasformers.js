export function transformMovie(movie) {
  return {
    imageURL:
      movie.poster_path === null
        ? 'https://consaltliga.com.ua/wp-content/themes/consultix/images/no-image-found-360x250.png'
        : `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    title: movie.title,
    release_date:
      movie.release_date !== '' ? `(${movie.release_date.split('-')[0]})` : '',
    id: movie.id,
    genres: movie.genres
      .map(item => {
        return item.name.toLowerCase();
      })
      .join(', '),
    overview: movie.overview,
    score: `${movie.vote_average * 10}%`,
  };
}
