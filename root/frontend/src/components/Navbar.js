import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-logo">[logo img]</Link>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <CustomLink to="/about">About</CustomLink>
            </li>
            <li>
                <CustomLink to="/roster">Team Roster</CustomLink>
            </li>
            <li>
                <CustomLink to="/competition">Competition</CustomLink>
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