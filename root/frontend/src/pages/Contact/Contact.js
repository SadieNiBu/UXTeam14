import './Contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_el37ov2', 'template_bdtok7t', form.current, 'jnlfFjPOionDmlQ2r')
    .then((result) => {
        console.log(result.text)
        alert("Your e-mail was sent, thank you for reaching out to the C3 team!")
    }, (error) => {
        console.log(error.text)
    })

    e.target.reset()

  }

  useEffect ( () => {
    document.title = "C3 Team @ UCF | Contact"
  })

  return (
    <body id='contact-anchor'>
    <Container>
      <Row>
        <Col className='contact-div'>
          <div className='contact'>
            <div className='divider'>
              <svg xmlns="http://www.w3.org/2000/svg" />
            </div>
            <p>Contact Us</p>
          </div>
          <div className='message'>
            <h3>We'd love to <br /> hear from you</h3>
            <p>Have any questions in mind? Please feel free to contact us 
              through the form below or the following details.
            </p>
          </div>
        </Col>
        <Col className='info-div'>
          <div className='info'>
            <h5>Let's talk!</h5>
            <div className='number'>
              <p>+1 (407) 823 0408</p>
            </div>
            <div className='email'>
              <p>thomas.nedorost@ucf.edu</p>
            </div>
            <div className='info-divider'>
              <svg xmlns="http://www.w3.org/2000/svg" />
            </div>
          </div>
          <div className='address'>
            <h5>CECS Office</h5>
            <p>12760 Pegasus Drive, Bldg. 40, Room 107, Orlando, Florida</p>
          </div>
          <div className='university'>
            <h5>University of Central Florida</h5>
            <p>4000 Central Florida Blvd, Orlando, Florida</p>
          </div>
          <div className='socials'>
            <a href='https://www.facebook.com/HackUCF/' className='facebook'><i class="bi bi-facebook"></i></a>
            <a href='https://twitter.com/hackucf'><i class="bi bi-twitter-x"></i></a>
            <a href='https://www.linkedin.com/company/collegiate-cyber-defense-club-at-ucf'><i class="bi bi-linkedin"></i></a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='form-div'>
          <form ref={form} onSubmit={sendEmail}
          className='contact_form'>
            <Col className='first_input_col'>
            <p>First Name</p>
              <input
              type='text'
              name='first_name'
              required
              />
            <p>Email</p>
              <input
              type='text'
              name='email'
              required
              />
            </Col>
            <Col className='second_input_col'>
            <p>Last Name</p>
              <input
              type='text'
              name='last_name'
              required
              />
            <p>Subject</p>
              <input
              type='text'
              name='subject'
              required 
              />
            </Col>
            <div className='text-message'>
              <p>Message</p>
              <textarea
              name='message_box'
              cols={129}
              rows={10}
              />
              <button type='submit' class="btn btn-primary">
              Send Email
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
    </body>
  )
}

export default Contact