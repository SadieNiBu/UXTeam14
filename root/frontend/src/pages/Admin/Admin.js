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

    const [showRoster, setShowRoster] = useState(false);
    const [showEvents, setShowEvents] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [showArticles, setShowArticles] = useState(false);
    const [showSemesters, setShowSemesters] = useState(false);
    
    const fetchMembers = async () => {
        const response = await fetch('https://213633.xyz/api/members');
        const json = await response.json();

        if (response.ok) {
            memberDispatch({ type: 'SET_MEMBERS', payload: json });
        }
    };

    const fetchPhotos = async () => {
        const response = await fetch('https://213633.xyz/api/photos');
        const json = await response.json();

        if (response.ok) {
            photoDispatch({ type: 'SET_PHOTOS', payload: json });
        }
    };

    const fetchSemesters = async () => {
        const response = await fetch('https://213633.xyz/api/semesters');
        const json = await response.json();

        if (response.ok) {
            semesterDispatch({type: 'SET_SEMESTERS', payload: json});
        }
    };

    const fetchEvents = async () => {
        const response = await fetch('https://213633.xyz/api/events')
        const json = await response.json()

        if (response.ok) {
            eventDispatch({type: 'SET_EVENTS', payload: json})
        }
    };

    const fetchArticles = async () => {
        const response = await fetch('https://213633.xyz/api/articles');
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
            const response = await fetch('https://213633.xyz/api/members', {
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
            const response = await fetch('https://213633.xyz/api/photos', {
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
            const response = await fetch('https://213633.xyz/api/events', {
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
            const response = await fetch('https://213633.xyz/api/semesters', {
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
            const response = await fetch('https://213633.xyz/api/articles', {
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
        <div className="admin-page">
          {admin && (
            <div>
              <span>{admin.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
    
          {/* Roster */}
          <div className="admin-section">
            <button onClick={() => setShowRoster(!showRoster)}>
              Roster {showRoster ? '▲' : '▼'}
            </button>
            {showRoster && (
              <div className="admin-members">
                <h2>Roster</h2>
                {members &&
                  members.map((member) => (
                    <MemberDetails
                      key={member._id}
                      member={member}
                      refetchMembers={fetchMembers}
                    />
                  ))}
                <MemberForm refetchMembers={fetchMembers} />
              </div>
            )}
          </div>
    
          {/* Events */}
          <div className="admin-section">
            <button onClick={() => setShowEvents(!showEvents)}>
              Events {showEvents ? '▲' : '▼'}
            </button>
            {showEvents && (
              <div className="admin-events">
                <h2>Events</h2>
                {events &&
                  events.map((event) => (
                    <EventDetails
                      key={event._id}
                      event={event}
                      refetchEvents={fetchEvents}
                    />
                  ))}
                <EventForm refetchEvents={fetchEvents} />
              </div>
            )}
          </div>
    
          {/* Gallery */}
          <div className="admin-section">
            <button onClick={() => setShowGallery(!showGallery)}>
              Gallery {showGallery ? '▲' : '▼'}
            </button>
            {showGallery && (
              <div className="admin-gallery-photos">
                <h2>Gallery</h2>
                {photos &&
                  photos.map((photo) => (
                    <PhotoDetails key={photo._id} photo={photo} />
                  ))}
                <PhotoForm refetchPhotos={fetchPhotos} />
              </div>
            )}
          </div>
    
          {/* Articles */}
          <div className="admin-section">
            <button onClick={() => setShowArticles(!showArticles)}>
              Articles {showArticles ? '▲' : '▼'}
            </button>
            {showArticles && (
              <div className="admin-articles">
                <h2>Articles</h2>
                {articles &&
                  articles.map((article) => (
                    <ArticleDetails
                      key={article._id}
                      article={article}
                      refetchArticles={fetchArticles}
                    />
                  ))}
                <ArticleForm refetchArticles={fetchArticles} />
              </div>
            )}
          </div>

          {/* Semesters */}
          <div className="admin-section">
            <button onClick={() => setShowSemesters(!showSemesters)}>
              Semester {showSemesters ? '▲' : '▼'}
            </button>
            {showSemesters && (
              <div className="admin-sems">
                <h2>Semester</h2>
                {semesters &&
                  semesters.map((semester) => (
                    <SemesterDetails
                      key={semester._id}
                      semester={semester}
                      refetchSemesters={fetchSemesters}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
    );
}

export default Admin