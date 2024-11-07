import './Competition.css'
import { useEffect, useState } from 'react'

const CompetitionSchedule = () => {
    const [ events, setEvents ] = useState(null)
    const [ currentPage, setCurrentPage ] = useState(1);

    const eventsPerPage = 6;

    useEffect ( () => {
        const fetchEvents = async () => {
            const response = await fetch('/api/events')
            const json = await response.json()

            if (response.ok) {
                setEvents(json)
            }
        }

        fetchEvents()
    }, [])


    if (!events) {
        return <h1>Loading....</h1>;
    }

    const startIndex = (currentPage - 1) * eventsPerPage
    const endIndex = startIndex + eventsPerPage
    const slicedEvents = events.slice(startIndex, endIndex)

    const handleNextPage = () => {
        if (endIndex < events.length) {
            setCurrentPage((prevPage) => prevPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (startIndex > 0) {
            setCurrentPage((prevPage) => prevPage - 1)
        }
    }

    return (
        <div className='comp-schedule'>
            <div className='comp-schedule-events'>
            {slicedEvents && slicedEvents.length > 0 ? (
                slicedEvents.map((event, index) => (
                    <div key={index}>
                        <p className='date'>{new Date(event.date).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}</p>
                        <div className='info'>
                            <h5>{event.title}</h5>
                            <p className='bio'>{event.description}</p>
                        </div>
                        <svg width="763" height="1" viewBox="0 0 1203 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="4.37114e-08" y1="0.5" x2="1203" y2="0.500105" stroke="white"/>
                        </svg>
                    </div>
                ))
             ) : (
                <div>
                    <h1>Loading....</h1>
                </div>
            )}
            </div>
            <div className='competition-buttons text-center'>
                <button class='btn btn-primary' onClick={handlePrevPage}> 
                    Prev
                </button>
                <span className='page-num'>{currentPage}</span>
                <button class='btn btn-primary' onClick={handleNextPage}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default CompetitionSchedule