import React, { useEffect, useState } from 'react'

// components
import MemberDetails from '../components/MemberDetails'
import EventDetails from '../components/EventDetails'
import MemberForm from '../components/MemberForm'
import EventForm from '../components/EventForm'

const Admin = () => {
    const [members, setMembers] = useState(null)
    const [events, setEvents] = useState(null)

    useEffect ( () => {
        document.title = "CCDC Team @ UCF | Admin"

        const fetchMembers = async () => {
            const response = await fetch('/api/members')
            const json = await response.json()

            if (response.ok) {
                setMembers(json)
            }
        }

        const fetchEvents = async () => {
            const response = await fetch('/api/events')
            const json = await response.json()

            if (response.ok) {
                setEvents(json)
            }
        }

        fetchMembers()
        fetchEvents()
    }, [])

    return (
        <div className='admin'>
            <div className='members'>
                <h2>Roster</h2>
                {members && members.map((member) => (
                    <MemberDetails key={member._id} member={member}/>
                ))}
            </div>
            <MemberForm />
            <div className='events'>
                <h2>Events</h2>
                {events && events.map((event) => (
                    <EventDetails key={event._id} event={event}/>
                ))}
            </div>
            <EventForm />
        </div>
    )
}

export default Admin