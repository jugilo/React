import './App.css'
import {useMovies} from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'



export function App() {
  
const {mappedMovies}= useMovies()
console.log(mappedMovies)

return(
    <>
      <header>
        <h1>Peliculas</h1>
        <form action='submit'>
          <label>Ingrese el nombre de una pelicula</label>
          <input type="text" placeholder='avengers, matrix...'/>
          <button type='submit'>buscar</button>
          <h1>Aca van los resultados</h1>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies}/>
      </main>
    </>
  )
}

