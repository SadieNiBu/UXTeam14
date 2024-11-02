import React, { useEffect } from 'react'
import { useEventContext } from '../hooks/useEventContext'
import { useMemberContext } from '../hooks/useMemberContext'

// components
import MemberDetails from '../components/MemberDetails'
import EventDetails from '../components/EventDetails'
import MemberForm from '../components/MemberForm'
import EventForm from '../components/EventForm'

const Admin = () => {
    const {events, dispatch: eventDispatch} = useEventContext()
    const {members, dispatch: memberDispatch} = useMemberContext()

    const fetchMembers = async () => {
        const response = await fetch('/api/members');
        const json = await response.json();

        if (response.ok) {
            memberDispatch({ type: 'SET_MEMBERS', payload: json });
        }
    };

    useEffect ( () => {
        document.title = "C3 Team @ UCF | Admin"

        const fetchMembers = async () => {
            const response = await fetch('/api/members')
            const json = await response.json()

            if (response.ok) {
                memberDispatch({type: 'SET_MEMBERS', payload: json})
            }
        }

        const fetchEvents = async () => {
            const response = await fetch('/api/events')
            const json = await response.json()

            if (response.ok) {
                eventDispatch({type: 'SET_EVENTS', payload: json})
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
                    <MemberDetails key={member._id} member={member} refetchMembers={fetchMembers} />
                ))}
            </div>
            <MemberForm refetchMembers={fetchMembers} />
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