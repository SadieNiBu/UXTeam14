import React, { useEffect } from 'react'
import { useEventContext } from '../hooks/useEventContext'
import { useMemberContext } from '../hooks/useMemberContext'
import { usePhotoContext } from '../hooks/usePhotoContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

// components
import MemberDetails from '../components/MemberDetails'
import EventDetails from '../components/EventDetails'
import PhotoDetails from '../components/PhotoDetails'
import MemberForm from '../components/MemberForm'
import EventForm from '../components/EventForm'
import PhotoForm from '../components/PhotoForm'

const Admin = () => {
    const { events, dispatch: eventDispatch } = useEventContext()
    const { members, dispatch: memberDispatch } = useMemberContext()
    const { photos, dispatch: photoDispatch } = usePhotoContext()
    const { logout } = useLogout()
    const { admin } = useAuthContext()

    const fetchMembers = async () => {
        const response = await fetch('/api/members');
        const json = await response.json();

        if (response.ok) {
            memberDispatch({ type: 'SET_MEMBERS', payload: json });
        }
    };

    const fetchPhotos = async () => {
        const response = await fetch('/api/photos');
        const json = await response.json();

        if (response.ok) {
            photoDispatch({ type: 'SET_PHOTOS', payload: json });
        }
    };

    const handleClick = () => {
        logout();
    }

    useEffect ( () => {
        document.title = "C3 Team @ UCF | Admin"

        const fetchMembers = async () => {
            const response = await fetch('/api/members', {
                headers: {
                    Authorization: `Bearer ${admin.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                memberDispatch({type: 'SET_MEMBERS', payload: json})
            }
        }

        const fetchPhotos = async () => {
            const response = await fetch('/api/photos', {
                headers: {
                    Authorization: `Bearer ${admin.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                photoDispatch({type: 'SET_PHOTOS', payload: json})
            }
        }

        const fetchEvents = async () => {
            const response = await fetch('/api/events')
            const json = await response.json()

            if (response.ok) {
                eventDispatch({type: 'SET_EVENTS', payload: json})
            }
        }
        
        if (admin) {
            fetchMembers()
            fetchEvents()
            fetchPhotos()
        }
    }, [admin])

    return (
        <div className='admin'>
            {admin && (
                <div>
                    <span>{admin.email}</span>
                    <button onClick={handleClick}>Log out</button>
                </div>
            )}
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
            <div className='gallery-photos'>
                <h2>Gallery</h2>
                {photos && photos.map((photo) => (
                    <PhotoDetails key={photo._id} photo={photo}/>
                ))}
            </div>
            <PhotoForm refetchPhotos={fetchPhotos} />
        </div>
    )
}

export default Admin