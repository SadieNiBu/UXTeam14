import { useEventContext } from "../hooks/useEventContext";

const EventDetails = ({ event }) => {
    const { dispatch } = useEventContext()
    
    const performDelete = async () => {
        const response = await fetch ('api/events/' + event._id, {
            method: 'DELETE'
        })

        const json = await response.json();

        if (response.ok) {
            dispatch({type: 'DELETE_EVENT', payload: json})
        }
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