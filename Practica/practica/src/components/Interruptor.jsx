import { useState } from 'react'
import { ButtonMoon, ButtonSun } from '../resource/Icon.jsx'

export function Interruptor(){

  const [interruptor, setInterruptor] = useState('off')
  const handleClickInterruptor = (action) => {
    if(action){
      setInterruptor('on')
    }
    else{
      setInterruptor('off')
    }
    }

    return(
        <section className={`secction-interruptor-${interruptor}`}>
            <button onClick={() =>handleClickInterruptor(true)}> Prender<ButtonSun/> </button>
            <button onClick={() =>handleClickInterruptor(false)}> Apagar<ButtonMoon/></button>
        </section>
    )
}