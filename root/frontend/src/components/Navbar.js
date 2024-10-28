import { Link, useMatch, useResolvedPath} from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import ChevronIcon from "./ChevronIcon"
import SearchIcon from "./SearchIcon"

export default function Navbar() {
    return <div className="nav-container">
        <nav className="navbar"> 
        <Link to="/" className="site-logo">[logo img]</Link>
        <div className="navbar-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        <ul className="navbar-menu">
            <li id="element" className="first-toggle">
                <div className="toggle-border"></div>
                <CustomLink to="/">Home</CustomLink>
            </li>
                <div className="dropdown">
                    <div id="dropbtn">
                        <CustomLink to="/about">About <ChevronIcon className="chevron-icon" /></CustomLink>
                    </div>
                    <div className="dropdown-content">
                        <li className="first-element" id="navelement">
                             <HashLink to="/about/#scholar-anchor">Scholarships</HashLink>
                        </li>
                        <li id="navelement">
                            <HashLink to="/about/#policies-anchor">Policies</HashLink>
                        </li>
                        <li id="navelement">
                            <HashLink to="/about/#grants-anchor">Grants</HashLink>
                        </li>
                    </div>
                </div>
            <div className="dropdown">
                <div id="dropbtn" style={{zIndex: "1"}}>
                    <CustomLink to="/roster">Team Roster <ChevronIcon className="chevron-icon" /></CustomLink>
                </div>
                <div className="dropdown-content">
                    <li className="first-element" id="navelement">
                        <HashLink to="/roster/#coaches-anchor">Coaches</HashLink>
                    </li>
                    <li id="navelement">
                        <HashLink to="/roster/#members-anchor">Members</HashLink>
                    </li>
                    <li id="navelement">
                        <HashLink to="/roster/#story-anchor">Success Stories</HashLink>
                    </li>
                </div>
            </div>
            <div className="dropdown">
                <div id="dropbtn" style={{zIndex: "1"}}>
                    <CustomLink to="/competition">Competition <ChevronIcon className="chevron-icon" /></CustomLink>
                </div>
                <div className="dropdown-content">
                    <li className="first-element" id="navelement">
                        <HashLink to="/competition/#schedule-anchor">Schedule</HashLink>
                    </li>
                    <li id="navelement">
                        <HashLink to="/competition/#awards-anchor">Past Awards</HashLink>
                    </li>
                </div>
            </div>
            <li style={{zIndex: "1"}} id="element">
                <CustomLink to="/press" >Press</CustomLink>
            </li>
            <li id="element">
                <CustomLink to="/gallery">Gallery</CustomLink>
            </li>
            <li id="element">
                <CustomLink to="/faq">FAQ</CustomLink>
            </li>
            <li id="element">
                <CustomLink to="/support">Support</CustomLink>
            </li>
            <li id="element">
                <CustomLink to="/contact">Contact</CustomLink>
            </li>
        </ul>
        <div className="search-button"><SearchIcon className="search-icon"/></div>
    </nav>
    </div>
}

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