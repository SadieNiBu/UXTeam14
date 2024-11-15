import { useState } from "react"
import { useEventContext } from "../hooks/useEventContext"
import { useAuthContext } from "../hooks/useAuthContext"

const EventForm = ({ refetchEvents }) => {
    const { dispatch } = useEventContext()
    const { admin } = useAuthContext()
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [result, setResult] = useState('')
    const [article, setArticle] = useState('')
    const [error, setError] = useState(null)

    const performSubmit = async (e) => {
        e.preventDefault()

        if (!admin) {
            setError('You must be logged in');
            return;
        }

        const event = {title, date, description, result, article}

        const response = await fetch('api/events', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${admin.token}`
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
            setResult('')
            setArticle('')
            setError(null)
            console.log('new event added', json)
            dispatch({type: 'CREATE_EVENT', payload: json})
            refetchEvents()
        }
    }

    return (
        <form className="admin-form" onSubmit={performSubmit}>
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

            <label>Event Result: </label>
            <input
            type="text"
            onChange={(e) => setResult(e.target.value)}
            value={result}
            />

            <label>Event Article: </label>
            <input
            type="text"
            onChange={(e) => setArticle(e.target.value)}
            value={article}
            />

            <button>Add Event</button>
        </form>
    )
}

export default EventForm