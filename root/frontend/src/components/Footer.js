import 'bootstrap-icons/font/bootstrap-icons.css'
import { HashLink } from 'react-router-hash-link'
import { Container, Row, Col, Image, Nav } from "react-bootstrap"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Footer () {
    return <footer className="footer">
        <Container>
            <Row>
               <Col>
                    <div className="ucf-logo text-center">
                        <Image
                            src="https://www.figma.com/file/2L36TR8aaRu4XXQscodojz/image/f5d0df6fc5a2251b3677f0aafb664d87c98e079c"
                            width={169}
                            height={60}
                        />
                    </div>
               </Col> 
               <Col>
                    <Nav className='footer-icons'>
                        <a href='https://www.linkedin.com/company/collegiate-cyber-defense-club-at-ucf'><i class="bi bi-linkedin"></i></a>
                        <a href='https://discord.com/invite/dqFtKgMqkJ'><i class="bi bi-discord"></i></a>
                        <a href='https://www.instagram.com/hack_ucf/?hl=en'><i class="bi bi-instagram"></i></a>
                        <a href='https://www.facebook.com/HackUCF/'><i class="bi bi-facebook"></i></a>
                        <a href='https://github.com/HackUCF'><i class="bi bi-github"></i></a>
                    </Nav>
                    <Nav className="footer-nav">
                        <CustomLink to="/about">About</CustomLink>
                        <CustomLink to="/about">Benefits</CustomLink>
                        <CustomLink to="/support">Donate</CustomLink>
                        <CustomLink to="/gallery">Gallery</CustomLink>
                        <CustomLink to="/roster">Team</CustomLink>
                    </Nav>
               </Col>
               <Col>
                    <div className="footer-btn text-center">
                        <button><HashLink smooth to="/contact/#contact-anchor">Contact Us</HashLink></button>
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