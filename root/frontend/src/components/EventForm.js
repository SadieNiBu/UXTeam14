import { useState } from "react"
import { useEventContext } from "../hooks/useEventContext"

const EventForm = () => {
    const { dispatch } = useEventContext()

    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState(null)

    const performSubmit = async (e) => {
        e.preventDefault()

        const event = {title, date, description}

        const response = await fetch('api/events', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setDescription('')
            setTitle('')
            setDate('')
            setError(null)
            console.log('new event added', json)
            dispatch({type: 'CREATE_EVENT', payload: json})
        }
    }

    return (
        <form className="adminForm" onSubmit={performSubmit}>
            <h3>Input a New Event to Your Event List</h3>

            <label>Event Name: </label>
            <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />

            <label>Event Date: </label>
            <input 
            type="text"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            />

            <label>Event Description: </label>
            <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            />

            <button>Add Event</button>
        </form>
    )
}

export default EventForm