import {useState} from 'react'
export function TwitterFollowCard ({ children, userName, initialIsFollowing}){

    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) //valor del estado, interruptro, valor inicial
    console.log(isFollowing)
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }



    const stateEjemplo = useState(false) //false valor inicial
    const isFollowingg = stateEjemplo[0] // valor del estado
    const setIsFollowingg= stateEjemplo [1] //"interruptor"
    //useState analogo a luz apagada en el cuarto, el primer parametro es como se encuentra y el segundo como cambiar ese estado


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button' 

    return(
       <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="Avatar de prueba" />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
       </article>
    )
}