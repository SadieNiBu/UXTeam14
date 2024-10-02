import { Link, useMatch, useResolvedPath } from "react-router-dom"
import ChevronIcon from "./ChevronIcon"
import SearchIcon from "./SearchIcon"

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-logo">[logo img]</Link>
        <ul>
            <li>
                <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
                <div className="dropdown">
                    <div className="dropbtn">
                        <CustomLink to="/about">About <ChevronIcon className="chevron-icon" /></CustomLink>
                    </div>
                    <div className="dropdown-content">
                        <li className="first-element">
                             <CustomLink to="/about">Scholarships</CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/about">Policies</CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/about">Grants</CustomLink>
                        </li>
                    </div>
                </div>
            </li>
            <li style={{zIndex: "1"}}>
                <CustomLink to="/roster">Team Roster <ChevronIcon className="chevron-icon" /></CustomLink>
            </li>
            <li>
                <CustomLink to="/competition">Competition <ChevronIcon className="chevron-icon" /></CustomLink>
            </li>
            <li>
                <CustomLink to="/press">Press</CustomLink>
            </li>
            <li>
                <CustomLink to="/gallery">Gallery</CustomLink>
            </li>
            <li>
                <CustomLink to="/faq">FAQ</CustomLink>
            </li>
            <li>
                <CustomLink to="/support">Support</CustomLink>
            </li>
            <li>
                <CustomLink to="/contact">Contact</CustomLink>
            </li>
        </ul>
        <div className="search-button"><SearchIcon className="search-icon"/></div>
    </nav>

    
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