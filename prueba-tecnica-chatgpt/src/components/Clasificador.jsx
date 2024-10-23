import { CreateList } from "./CreateList"
import { useFetchData } from './Hooks/useFetchData.js';


export function Clasificador() {
    const {show, completed, handleSubmit, handleComplete} = useFetchData()
    console.log(show)
    return(
    <>
    <main>
      <form onSubmit={handleSubmit}>
        <label>Nota</label>
        <input name="query" type="text"/>
        <button type='submit'>agregar tarea</button>
      </form>
      </main>
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
    </>
    )
}