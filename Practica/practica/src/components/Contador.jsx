import { useState } from "react"



export function Contador(){
    const [cont, setCont] = useState(0)

    const handleClick = (action) => {
    if(action == 'sumar'){
    setCont(cont + 1)
    }else if(action == 'restar'){
    if(cont<=0){setCont(0)}
    else{setCont(cont - 1)}
    }else if(action ==  'eliminar'){
    setCont(0)
    }
}

    return(
    <section className="section-contador">
        <p>Contador: {cont} </p>
        <button onClick={()=>handleClick('sumar')}>Sumar </button>
        <button onClick={()=>handleClick('restar')}>Restar </button>
        <button onClick={()=>handleClick('eliminar')}>Eliminar valor</button>
      </section>
    )
}