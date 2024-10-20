import { Link, useMatch, useResolvedPath} from "react-router-dom"
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
                             <CustomLink to="">Scholarships</CustomLink>
                        </li>
                        <li id="navelement">
                            <CustomLink to="">Policies</CustomLink>
                        </li>
                        <li id="navelement">
                            <CustomLink to="">Grants</CustomLink>
                        </li>
                    </div>
                </div>
            <div className="dropdown">
                <div id="dropbtn" style={{zIndex: "1"}}>
                    <CustomLink to="/roster">Team Roster <ChevronIcon className="chevron-icon" /></CustomLink>
                </div>
                <div className="dropdown-content">
                    <li className="first-element" id="navelement">
                        <CustomLink to="">Coaches</CustomLink>
                    </li>
                    <li id="navelement">
                        <CustomLink to="">Members</CustomLink>
                    </li>
                    <li id="navelement">
                        <CustomLink to="">Success Stories</CustomLink>
                    </li>
                </div>
            </div>
            <div className="dropdown">
                <div id="dropbtn" style={{zIndex: "1"}}>
                    <CustomLink to="/competition">Competition <ChevronIcon className="chevron-icon" /></CustomLink>
                </div>
                <div className="dropdown-content">
                    <li className="first-element" id="navelement">
                        <CustomLink to="">Schedule</CustomLink>
                    </li>
                    <li id="navelement">
                        <CustomLink to="">Past Awards</CustomLink>
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