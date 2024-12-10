import './Home.css';
import { useEffect, useRef, useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { format, addDays } from 'date-fns';
import placeholder from './Images/placeholder.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeCompetitions = () => {
    const [events, setEvents] = useState(null);
    const competitionMap = "https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/w_490/v1732326120/4c71948dafb599fb63803efb2a0d9311_ejmi2u.png";

    // Refs for animation
    const mainRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('https://213633.xyz/api/events');
            const json = await response.json();

            if (response.ok) {
                setEvents(json);
            }
        };

        fetchEvents();
    }, []);

    useEffect(() => {
        if (events) {
            // Animate main section
            gsap.fromTo(
                mainRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: mainRef.current,
                        start: 'top 80%',
                    },
                }
            );

            // Animate individual items
            gsap.fromTo(
                itemsRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 2.2,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: itemsRef.current,
                        start: 'top 90%',
                    },
                }
            );
        }
    }, [events]);

    if (!events) {
        return <h1>Loading competitions...</h1>;
    }

    const currentDate = new Date();
    const totalUpcoming = events.filter(event => new Date(event.date) >= currentDate);
    const upcomingEvents = events
        .filter(event => new Date(event.date) >= currentDate)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 4);

    return (
        <div className="competitions full-bleed--black" ref={mainRef}>
            <div className="top">
                <p>Competitions</p>
                <h1>{totalUpcoming.length} Upcoming Competitions</h1>
                <Link to='competition' className="btn btn-primary">
                    See More
                </Link>
            </div>
            <div className="list">
                <div className="main">
                    {upcomingEvents.length > 0 ? (
                        <>
                            <img
                                src={competitionMap}
                                className="photo"
                                loading="lazy"
                                alt={"Map of competition regions"}
                            />
                            <div className="date">
                                {format(addDays(new Date(upcomingEvents[0].date), 1), 'MMM d')}
                            </div>
                            <div className="description">
                                <h5>{upcomingEvents[0].title}</h5>
                                <p>{upcomingEvents[0].description}</p>
                            </div>
                        </>
                    ) : (
                        <p>No upcoming competitions available.</p>
                    )}
                </div>
                <div className="others">
                    {upcomingEvents.slice(1).map((event, index) => (
                        <div
                            className="item"
                            key={index}
                            ref={(el) => (itemsRef.current[index] = el)}
                        >
                            <div className="date">
                                {format(addDays(new Date(event.date), 1), 'MMM d')}
                            </div>
                            <h5>{event.title}</h5>
                            <p>{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeCompetitions;