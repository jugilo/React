import { TwitterFollowCard } from "./twitterFollowCard"
import './App.css'

/* const formatUserName = (userName) => `@${userName}` //formatUserName={formatUserName} pasamos la funcion para que se ejecute en el componente
const FormattedUserName = <span>@midudev</span> //forma de pasar un elemento como prop
//si a nivel de componente tengo algo dentro del componente <span>Esto</span>, "Esto" el componente lo recibe como "children"
//los booleanos se pasan esTrue, esTrue={true} o {false}
const midudev = {isFollowing: true, userName: "midudev"} //forma de mandar un objeto asi se envia la prop {...midudev}

// para inicializar un estado por medio de una prop se recomienda que sea con el prefijo initial */

const users = [
    {
        name: 'Miguel Angel',
        userName: 'midudev',
        InitialIsFollowing:   true

    },
    {
        name: 'Juan José Gil',
        userName: 'jugilo',
        InitialIsFollowing: false
    }
]


export function App(){
    return(
        <section className="App">
            {
                users.map(({userName, name, InitialIsFollowing}) =>(
                    <TwitterFollowCard userName={userName} InitialIsFolowing={InitialIsFollowing} key={userName}>
                        {name}
                    </TwitterFollowCard>     
            ))
        }
        </section>
    )
}