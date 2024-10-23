import { useState } from "react";

export function CreateList({text, id, onComplete}){

    const[state, setState] = useState(true)
  
    const handleDelate = () => {
      setState(false)
    }
    const handleComplete = () => {
      onComplete(id);
    };
    
    return(
      state && 
      (
      <li id={id}>
        <p>{text}</p>
        <label>completado</label>
        <input type="checkbox" onChange={handleComplete}/>
        <button onClick={handleDelate} >Eliminar tarea</button>
      </li>
      )
  )
  }