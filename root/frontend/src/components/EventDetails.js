const EventDetails = ({ event }) => {
    
    const performDelete = async () => {
        const response = await fetch ('api/events/' + event._id, {
            method: 'DELETE'
        })

        const json = await response.json();
    }
    
    return (
        <div className="eventDetails">
            <p><strong>Title of Event: </strong>{event.title}</p>
            <p><strong>Date of Event: </strong>{event.date}</p>
            <p><strong>Description: </strong>{event.description}</p>
            <span onClick={performDelete}>
                <button>Delete</button>
            </span>
        </div>
    )
}

export default EventDetails