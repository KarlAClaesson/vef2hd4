import { useState} from "react"
import '../styles.css'
import Input from './Input'
import { useContext } from "react"
import { UserContext } from "./UserContext"

function Form() {

    const {user} = useContext(UserContext)
    const[registered, setRegistered] = useState(false)

    if (registered === false && user){
        return (
            <form className="form">
                {Input('Athugasemd:')}
                <button className="button"
                onClick={async () => {
                    setRegistered(true)
                }}>Skrá mig</button>
            </form>
        )
    }
    return(
        <p>Þú hefur skráð þig á þennan viðburð</p>
    )
    
}

export default Form