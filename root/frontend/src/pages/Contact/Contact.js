import './Contact.css'
import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"


const Contact = () => {

  useEffect ( () => {
    document.title = "C3 Team @ UCF | Contact"
  })

  return (
    <body>
    <Container>
      <Row>
        <Col>
          <div className='contact'>
            <div className='divider'>
              <svg xmlns="http://www.w3.org/2000/svg" />
            </div>
            <p>Contact Us</p>
          </div>
          <div className='message'>
            <h3>We'd love to <br /> hear from you</h3>
            <p>Have any questions in mind? Please feel free to contact us 
              <br />through the form below or the following details.
            </p>
          </div>
        </Col>
        <Col>
          <div className='info'>
            <h5>Let's talk!</h5>
            <div className='number'>
              <p>+1 (123) 456 7890</p>
            </div>
            <div className='email'>
              <p>hello@somedomain.com</p>
            </div>
            <div className='info-divider'>
              <svg xmlns="http://www.w3.org/2000/svg" />
            </div>
          </div>
          <div className='address'>
            <h5>CECS Office</h5>
            <p>888 Somplace Drive, Orlando, Florida</p>
          </div>
          <div className='university'>
            <h5>University of Central Florida</h5>
            <p>888 Somplace Drive, Orlando, Florida</p>
          </div>
          <div className='socials'>
            <a href='https://www.facebook.com/' className='facebook'><i class="bi bi-facebook"></i></a>
            <a href='https://x.com/?lang=en'><i class="bi bi-twitter-x"></i></a>
            <a href='https://www.linkedin.com/'><i class="bi bi-linkedin"></i></a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
    </Container>
    </body>
  )
}

export default Contact