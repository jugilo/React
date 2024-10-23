function ListOfMovies({movies}){
    return(
      <ul>
                {
                  movies.map(movie => (
                    <li key={movie.id}>
                      <h3>{movie.title}</h3>
                      <img src={movie.poster} alt="" />
                    </li>
                  ))
                } 
            </ul>
  ) 
}

function NoMoviesResults() {
  return(
    <h1>no hay peliculas</h1>
  )
}

export function Movies({movies}){
    const hasMovies = movies?.length>0
    
    return(
        hasMovies ? <ListOfMovies movies={movies}/> : <NoMoviesResults/>
    )
}