import './Competition.css'
import { useEffect, useState } from 'react'

const CompetitionSchedule = () => {
    const [ events, setEvents ] = useState(null)
    const [ semesters, setSemesters ] = useState(null)
    const [ currentPage, setCurrentPage ] = useState(1)

    const eventsPerPage = 6

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('/api/events')
            const json = await response.json()

            if (response.ok) {
                setEvents(json)
            }
        }

        const fetchSemesters = async () => {
            const response = await fetch('/api/semesters')
            const json = await response.json()

            if (response.ok) {
                setSemesters(json)
            }
        }

        fetchEvents()
        fetchSemesters()
    }, [])

    if (!events || !semesters) {
        return <h1>Loading....</h1>
    }

    const selectedYear = Number(semesters[0].year);
    const filteredEvents = events.filter(event => new Date(event.date).getFullYear() === selectedYear);
    
    const sortedEvents = [...filteredEvents].sort((a, b) => new Date(a.date) - new Date(b.date));

    const startIndex = (currentPage - 1) * eventsPerPage
    const endIndex = startIndex + eventsPerPage
    const slicedEvents = sortedEvents.slice(startIndex, endIndex)

    const handleNextPage = () => {
        if (endIndex < sortedEvents.length) {
            setCurrentPage(prevPage => prevPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (startIndex > 0) {
            setCurrentPage(prevPage => prevPage - 1)
        }
    }

    return (
        <div className='comp-schedule'>
            <div className='comp-schedule-events'>
                {slicedEvents.length > 0 ? (
                    slicedEvents.map((event, index) => (
                        <div key={index}>
                            <p className='date'>
                                {new Date (new Date(event.date).setDate(new Date(event.date).getDate() + 1)).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </p>
                            <div className='info'>
                                <h5>{event.title}</h5>
                                <p className='bio'>{event.description}</p>
                            </div>
                            <svg width="763" height="1" viewBox="0 0 1203 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="4.37114e-08" y1="0.5" x2="1203" y2="0.500105" stroke="white" />
                            </svg>
                        </div>
                    ))
                ) : (
                    <div>
                        <h1>No events available for the selected year.</h1>
                    </div>
                )}
            </div>
            <div className='competition-buttons text-center'>
                <button className='btn btn-primary' onClick={handlePrevPage}>Prev</button>
                <span className='page-num'>{currentPage}</span>
                <button className='btn btn-primary' onClick={handleNextPage}>Next</button>
            </div>
        </div>
    )
}

export default CompetitionSchedule