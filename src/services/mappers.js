export function movieMapper(movies) {
  return movies.map(movie => ({
    title: movie.title,
    id: movie.id,
  }));
}

export function castsMapper(casts) {
  return casts.map(cast => ({
    cast_id: cast.cast_id,
    character: cast.character,
    name: cast.name,
    profile:
      cast.profile_path === null
        ? 'https://consaltliga.com.ua/wp-content/themes/consultix/images/no-image-found-360x250.png'
        : `https://image.tmdb.org/t/p/w500${cast.profile_path}`,
  }));
}
