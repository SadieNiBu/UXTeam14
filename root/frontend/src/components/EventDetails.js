import { useEventContext } from "../hooks/useEventContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";

const EventDetails = ({ event, refetchEvents }) => {
    const { dispatch } = useEventContext()
    const { admin } = useAuthContext()
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(event.description)
    const [title, setTitle] = useState(event.title)
    const [date, setDate] = useState(event.date)
    const [result, setResult] = useState(event.result)
    const [article, setArticle] = useState(event.article)

    useEffect(() => {
        setDescription(event.description)
        setDate(event.date)
        setTitle(event.title)
        setResult(event.result)
        setArticle(event.article)
    }, [event]);
    
    const performDelete = async () => {
        if (!admin) return;
        
        const response = await fetch ('api/events/' + event._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${admin.token}`
            }
        })

        const json = await response.json();

        if (response.ok) {
            dispatch({type: 'DELETE_EVENT', payload: json})
        }
    }

    const performUpdate = async (e) => { 
        e.preventDefault();

        if (!admin) return;

        const updatedEvent = {title, date, description, result, article}

        const response = await fetch('/api/events/' + event._id, {
            method: 'PATCH',
            body: JSON.stringify(updatedEvent),
            headers: {
                'Authorization': `Bearer ${admin.token}`,
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'UPDATE_EVENT', payload: json });
            setIsEditing(false);
            refetchEvents();
        }
    };
    
    return (
        <div className="eventDetails">
            {isEditing ? (
                <form onSubmit={performUpdate} encType="multipart/form-data">
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
                    
                    <button type="submit">Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <p><strong>Title of Event: </strong>{title}</p>
                    <p><strong>Date of Event: </strong>{date}</p>
                    <p><strong>Description: </strong>{description}</p>
                    <p><strong>Result: </strong>{result}</p>
                    <p><strong>Article: </strong>{article}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <span onClick={performDelete}>
                        <button>Delete</button>
                    </span>
                </>
            )}
        </div>
    );
}

export default EventDetails