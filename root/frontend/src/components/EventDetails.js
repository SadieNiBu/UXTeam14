const EventDetails = ({ event }) => {
    return (
        <div className="eventDetails">
            <h2>Events</h2>
            <p><strong>Title of Event: </strong>{event.title}</p>
            <p><strong>Date of Event: </strong>{event.date}</p>
            <p><strong>Description: </strong>{event.description}</p>
        </div>
    )
}

export default EventDetails