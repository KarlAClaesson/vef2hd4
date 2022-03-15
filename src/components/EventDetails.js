import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react'

import Registration from './Registration'
import Back from './Back'
import { UserContext } from "./UserContext";
import Form from './Form'
import '../styles.css'

function EventDetails() {

    const {user} = useContext(UserContext)
    const params = useParams()
    const [event, setEvent] = useState([])
    const [registrations, setRegistrations] = useState([])
    

    useEffect(() => {
        const getEvent = async () => {
            const eventFromServer = await fetchEvent()
            const registrationsFromServer = await fetchRegistrations()
            setEvent(eventFromServer)
            setRegistrations(registrationsFromServer)
        }
        getEvent()

    }, [])

    const fetchEvent = async () => {
        const url = 'https://vef2-20222-v3-synilausn.herokuapp.com/events/' + params.id
        const res = await fetch(url)
        const data = await res.json()
        return data
    }

    const fetchRegistrations = async () => {
        const url = 'https://vef2-20222-v3-synilausn.herokuapp.com/events/' + params.id
        const res = await fetch(url)
        const data = await res.json()
        return data.registrations
    }

    return (
        <>
            <h1 className="event__title">{event.name}</h1>
            <p className="events__eventDescription">{event.description}</p>
            {registrations.map((registration) =>
            <React.Fragment key={registration.id}>{Registration(registration)}</React.Fragment>
            )}
            {Form()}
            {Back}
        </>
    )

}

export default EventDetails
