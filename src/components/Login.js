import Back from "./Back"
import Input  from "./Input"
import Button from "./Button"


const Login = () => {
    return (
        <form>  
            {Input('Notendanfn:')}
            {Input('Lykilorð:')}
            {Button('Innskrá', 'button')}
            {Back}
        </form>
    )
}

export default Login