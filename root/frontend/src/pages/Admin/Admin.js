import React, { useEffect, useState } from 'react'
import './Admin.css'
import { useEventContext } from '../../hooks/useEventContext'
import { useSemesterContext } from '../../hooks/useSemesterContext'
import { useMemberContext } from '../../hooks/useMemberContext'
import { usePhotoContext } from '../../hooks/usePhotoContext'
import { useArticleContext } from '../../hooks/useArticleContext'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'

// components
import SemesterDetails from '../../components/SemesterDetails'
import MemberDetails from '../../components/MemberDetails'
import EventDetails from '../../components/EventDetails'
import PhotoDetails from '../../components/PhotoDetails'
import ArticleDetails from '../../components/ArticleDetails'
import SemesterForm from '../../components/SemesterForm'
import MemberForm from '../../components/MemberForm'
import EventForm from '../../components/EventForm'
import PhotoForm from '../../components/PhotoForm'
import ArticleForm from '../../components/ArticleForm'

const Admin = () => {
    const { events, dispatch: eventDispatch } = useEventContext()
    const { members, dispatch: memberDispatch } = useMemberContext()
    const { photos, dispatch: photoDispatch } = usePhotoContext()
    const { semesters, dispatch: semesterDispatch } = useSemesterContext()
    const { articles, dispatch: articleDispatch } = useArticleContext()
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

    const fetchSemesters = async () => {
        const response = await fetch('/api/semesters');
        const json = await response.json();

        if (response.ok) {
            semesterDispatch({type: 'SET_SEMESTERS', payload: json});
        }
    };

    const fetchEvents = async () => {
        const response = await fetch('/api/events')
        const json = await response.json()

        if (response.ok) {
            eventDispatch({type: 'SET_EVENTS', payload: json})
        }
    };

    const fetchArticles = async () => {
        const response = await fetch('/api/articles');
        const json = await response.json();

        if (response.ok) {
            articleDispatch({ type: 'SET_ARTICLES', payload: json });
        }
    }

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
            const response = await fetch('/api/events', {
                headers: {
                    Authorization: `Bearer ${admin.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                eventDispatch({type: 'SET_EVENTS', payload: json})
            }
        }

        const fetchSemesters = async () => {
            const response = await fetch('/api/semesters', {
                headers: {
                    Authorization: `Bearer ${admin.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                semesterDispatch({type: 'SET_SEMESTERS', payload: json})
            }
        }

        const fetchArticles = async () => {
            const response = await fetch('/api/articles', {
                headers: {
                    Authorization: `Bearer ${admin.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                articleDispatch({type: 'SET_ARTICLES', payload: json})
            }
        }
        
        if (admin) {
            fetchMembers()
            fetchEvents()
            fetchPhotos()
            fetchSemesters()
            fetchArticles()
        }
    }, [admin])

    return (
        <div className='admin-page'>
            {admin && (
                <div>
                    <span>{admin.email}</span>
                    <button onClick={handleClick}>Log out</button>
                </div>
            )}
            <div className='admin-members'>
                <h2>Roster</h2>
                {members && members.map((member) => (
                    <MemberDetails key={member._id} member={member} refetchMembers={fetchMembers} />
                ))}
            </div>
            <MemberForm refetchMembers={fetchMembers} />
            <div className='admin-events'>
                <h2>Events</h2>
                {events && events.map((event) => (
                    <EventDetails key={event._id} event={event} refetchEvents={fetchEvents} />
                ))}
            </div>
            <EventForm refetchEvents={fetchEvents} />
            <div className='admin-gallery-photos'>
                <h2>Gallery</h2>
                {photos && photos.map((photo) => (
                    <PhotoDetails key={photo._id} photo={photo}/>
                ))}
            </div>
            <PhotoForm refetchPhotos={fetchPhotos} />
            <div className='admin-semester-info'>
                <h2>Semester Info</h2>
                {semesters && semesters.map((semester) => (
                    <SemesterDetails key={semester._id} semester={semester} refetchSemesters={fetchSemesters}/>
                ))}
            </div>
            
            <div className='admin-articles'>
                <h2>Articles</h2>
                {articles && articles.map((article) => (
                    <ArticleDetails key={article._id} article={article} refetchArticles={fetchArticles}/>
                ))}
            </div>
            <ArticleForm refetchArticles={fetchArticles} />
        </div>
    )
}

export default Admin