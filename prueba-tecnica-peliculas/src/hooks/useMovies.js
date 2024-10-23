import data from '../mooks/data.json'

export function useMovies(){

    const movies = data.Search
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster
    }))

  return {mappedMovies}
}
  