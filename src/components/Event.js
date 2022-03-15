import { Link } from "react-router-dom"
import '../styles.css'

const Event = (event) => {
    return (
        <>
        <p className="event__Title"><Link className="events_eventlink" to ={`/event/${event.id}`}>{event.name}</Link></p>
        <p className="events__eventDescription">{event.description}</p>
        </>
    )
}

export default Event