import { useEffect, useState } from "react"
import "./App.css"

const API_FACTS="https://catfact.ninja/fact"
const API_CAT="https://cataas.com/cat/says"

export function App() {

  const[fact,setFact]=useState()
  const[word, setWord]=useState()
  const[newImage, setNewImage]=useState()

  console.log(fact)
  console.log(word)

  useEffect(()=>{
    fetch(API_FACTS)
    .then(res => res.json())
    .then(data => {
      const {fact} = data
      setFact(fact)
      const firstWord = fact.split(' ',1).join('')
      console.log(firstWord)
      setWord(firstWord)  
      })
    
  },[newImage])

  const handleClick = (action) =>{
    setNewImage(action)
  }



  return (
    <main>
      {fact && <p>{fact}</p>}
      <img src={`${API_CAT}/${word}`} alt="" />
      <button onClick={handleClick} >Generar otra imagen</button>
    </main>
  )

}

