import 'bootstrap-icons/font/bootstrap-icons.css'
import { Container, Row, Col, Image, Nav } from "react-bootstrap"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Footer () {
    return <footer className="footer">
        <Container fluid>
            <Row>
               <Col>
                    <div className="ucf-logo">
                        <Image
                            src="https://s3-alpha-sig.figma.com/img/f5d0/df6f/c5a2251b3677f0aafb664d87c98e079c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fpVcFZUUb4R8utQQKHitRxCfpkMHpbprqWZuxVX~gJxr7EZiYmJxFfyHyOmxeLh~Kwc4eIIde3YB~-W~5ojc4-pccVbs2AKKjQhkhDbaMJ5R1jal1UF2cNdruRYEHw5BEYbEZhTvees2Xa7wFkZcHJ8umRVcSrH1yVZc9SyldpdoKOYdtbbwBapT0Zj9WSJS8AzqxilYM4YP~qsjj4uuueroanPgMw4kp9xwy5otZl36hvkOP09KhOTmCf2PGwo3A5PADgC6Fn6yBmiBIiWG2FQv0wwnHhKqWnTm3viKdfiugQ0TG6sEDxzbN-6Rdd7EbYJgDzlLfncpwZCAnGM4Iw__"
                            width={169}
                            height={60}
                        />
                    </div>
               </Col> 
               <Col>
                    <Nav className='footer-icons'>
                        <a href='https://www.linkedin.com/'><i class="bi bi-linkedin"></i></a>
                        <a href='https://discord.com/'><i class="bi bi-discord"></i></a>
                        <a href='https://www.instagram.com/?hl=en'><i class="bi bi-instagram"></i></a>
                        <a href='https://www.facebook.com/'><i class="bi bi-facebook"></i></a>
                        <a href='https://github.com/'><i class="bi bi-github"></i></a>
                    </Nav>
                    <Nav className="footer-nav">
                        <CustomLink to="/about">About</CustomLink>
                        <CustomLink to="/about">Benefits</CustomLink>
                        <CustomLink to="/support">Donate</CustomLink>
                        <CustomLink to="/gallary">Gallary</CustomLink>
                        <CustomLink to="/roster">Team</CustomLink>
                    </Nav>
               </Col>
               <Col>
                    <div className="footer-btn">
                        <button><CustomLink to="/contact">Contact Us</CustomLink></button>
                    </ div>
               </Col> 
            </Row>
            <hr />
            <div className="footer-cr">
                © 2024 All Rights Reserved
            </div>
        </Container>
    </footer>
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