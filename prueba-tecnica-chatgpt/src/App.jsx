import './App.css'
import {CreateList} from './components/CreateList.jsx'
import { useFetchData } from './Hooks/useFetchData.js';




export function App() {
  const {show, completed, handleSubmit, handleComplete} = useFetchData()
  return (
    <>
    <div className='app'>

    <headear>
      <h1>App de gestión de tareas</h1>
    </headear>

    <main>
      <form onSubmit={handleSubmit}>
        <label>Nota</label>
        <input name="query" type="text"/>
        <button type='submit'>agregar tarea</button>
      </form>
      </main>
      <footer>

      <section className='pendientes'>
        <h1>pendientes</h1>
        <ul>

      {   
          show.map(task => (
            <CreateList
            key={task.userId}
            id={task.id}
            text={task.title}
            onComplete={handleComplete}
            />
          ))
        }
        </ul>
      </section>


      <section className='Completados'>
        <h1>Completados</h1>
        <ul>
              {completed.map((task) => (
                <li key={task.userId}>
                  <p>{task.title}</p>
                </li>
              ))}
            </ul>

      </section>
      </footer>
    </div>
    </>
  )
}

