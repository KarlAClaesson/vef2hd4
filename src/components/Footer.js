import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import '../styles.css'

import Button from './Button'

function Footer() {
    const {user} = useContext(UserContext)

    return (
        <footer>
            {user ? <p className="user">Skráður inn sem {user}</p> : <Link className="user" to='/login'>Innskrá</Link>}<br/>
            {Button('Nýskrá')}
        </footer>
    ) 
}

export default Footer