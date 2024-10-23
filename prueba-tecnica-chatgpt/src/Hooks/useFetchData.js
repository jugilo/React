import { useEffect, useState } from "react"

export function useFetchData(event, id){
    const[show, setShow] = useState([])
    const [completed, setCompleted] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(info => {
        const filter = info.slice(0,10)
        console.log(filter)
        setShow(filter)
      }
      )
    },[])
    console.log(show)

    const handleSubmit = (event) =>{
      event.preventDefault()
      const fields = new window.FormData(event.target)
      //const fields = Object.fr  omEntries(new window.FormData(event.target)) forma de obtener todos los valores de los inputs en un objeto
      const query = fields.get('query')
      console.log(show)
      setShow([...show, {title: query, id:Date.now(), userId:1, completed: false}])
      console.log(show)
    }

    const handleComplete = (id) => {
        const completedTask = show.find((task) => task.id === id);
        setCompleted([...completed, completedTask]);
        setShow(show.filter((task) => task.id !== id)); // Remove task from pendientes
      };
  
  
    return({show, completed, handleSubmit, handleComplete})
  }