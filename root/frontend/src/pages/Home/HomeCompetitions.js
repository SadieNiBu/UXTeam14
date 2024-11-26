import './Home.css';
import { useEffect, useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"; 
import { format, addDays } from 'date-fns';
import placeholder from './Images/placeholder.jpg';

const HomeCompetitions = () => {
    const [events, setEvents] = useState(null);

    const competitionMap = "https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/w_490/v1732326120/4c71948dafb599fb63803efb2a0d9311_ejmi2u.png";

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('https://ucf-c3-team-website-api.onrender.com/api/events');
            const json = await response.json();

            if (response.ok) {
                setEvents(json);
            }
        };

        fetchEvents();
    }, []);

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
        <div className="competitions full-bleed--black">
            <div className="top">
                <p>Competitions</p>
                <h1>{totalUpcoming.length} Upcoming Competitions</h1>
                <button type="button" className="btn btn-primary">
                    <CustomLink to="competition">See More</CustomLink>
                </button>
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
                        <div className="item" key={index}>
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

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default HomeCompetitions;