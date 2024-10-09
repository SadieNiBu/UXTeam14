import './Support.css'
import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"

const Support = () => {

  useEffect ( () => {
    document.title = "C3 Team @ UCF | Support"
  })

  return (
    <body className='support_body'>
    <Container>
      <Row className='header'>
        <Col>
          <div className='header_title'>
            <h3>Become a supporter for our team</h3>
          </div>
          <div className='header_bio'>
            <p>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst necaliquetid ullamcorper venenatis.<br />Fermentum sulla craspor ttitore ismod nulla</p>
          </div>
          <div className='header_line'>
            <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </div>
        </Col>
      </Row>
      <Row className='top_line_decor'>
        <svg width="1494" height="25" viewBox="0 0 1494 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 26L358 0L486 20.3538L528 26H250H0Z" fill="#0A58CA"/>
        <path d="M1276 16.2359L1494 26H994H744H528L578 20.3538L643 14.3L780 20.3538L1019 23.4189L1276 16.2359Z" fill="#0A58CA"/>
        </svg>
      </Row>
      <Row className='contributions'>
        <Col>
         <div className='contributions_line'>
            <svg width="72" height="2" viewBox="0 0 72 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H72" stroke="#FFC904" stroke-width="2"/>
            </svg>
         </div>
         <div className='contributions_title'>
            <p>Contributions</p>
         </div>
         <div>
          <h1>WHAT YOU CAN DONATE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius<br />enim in eros elementum tristique.</p>
         </div>
         <div>
            <svg width="2" height="441" viewBox="0 0 2 441" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="-4.37114e-08" x2="1.00002" y2="441" stroke="#E5E5E5" stroke-width="2"/>
            </svg>
            <div>
              <i></i>
              <h4>Something</h4>
              <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Suspendisse varius enim in eros.</p>
              <i></i>
              <h4>Something</h4>
              <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Suspendisse varius enim in eros.</p>
              <i></i>
              <h4>Something</h4>
              <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Suspendisse varius enim in eros.</p>
              <i></i>
              <h4>Something</h4>
              <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
         </div>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row className='bottom_line_decor'>
        <svg width="1494" height="28" viewBox="0 0 1494 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1494 0L1056 18L1008 8.68649L966 0H1244H1494Z" fill="#0A58CA"/>
        <path d="M218 28L0 0H500H750H966L916 8.68649L851 18L714 8.68649L475 3.97097L218 28Z" fill="#0A58CA"/>
        </svg>
      </Row>
      <Row className='help'>
        <div>

        </div>
      </Row>
    </Container>
    </body>
  )
}

export default Support