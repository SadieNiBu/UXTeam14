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
              <svg xmlns="http://www.w3.org/2000/svg">
              </svg>
            </div>
            <p>Contact Us</p>
          </div>
          <div className='message'>
            <h3>We'd love to <br /> hear from you</h3>
            <p>Have any questions in mind? Please feel free to contact us 
              through the form or the following details.
            </p>
          </div>
        </Col>
        <Col>LETS TALK</Col>
      </Row>
      <Row>
        <Col>SEND EMAIL</Col>
      </Row>
    </Container>
    </body>
  )
}

export default Contact