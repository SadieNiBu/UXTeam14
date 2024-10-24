import './Gallery.css'
import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"

const Gallery = () => {

  useEffect ( () => {
    document.title = "C3 Team @ UCF | Gallery"
  })

  return (
    <Container>
      <Row className='gallery-header text-center'>
        <h1>Photo Gallery</h1>
        <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
        </svg>
      </Row>
      <Row className='photo-group-1'>
        <Row>
          <Col className='group-1-header'>
            <h1>PHOTO GROUP HEADER</h1>
            <p>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla.<br />Orci, dictumst nec aliquet id </p>
            <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </Col>
          <Col className='group-1-date'>
            <p>July 26, 2024</p>
          </Col>
        </Row>
      </Row>
      <Row className='photo-group-2'>
        <Row>
          <Col className='group-2-header'>
            <h1>PHOTO GROUP HEADER</h1>
            <p>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla.<br />Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor<br />ttitore ismod nulla. um sulla craspor ttitore ismod nulla.</p>
            <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </Col>
          <Col className='group-2-date'>
            <p>July 26, 2024</p>
          </Col>
        </Row>
      </Row>
      <Row className='video-group'>
        <Row>
          <Col className='video-group-header'>
            <h1>VIDEO GROUP HEADER</h1>
            <p>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla.<br />Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor<br />ttitore ismod nulla. um sulla craspor ttitore ismod nulla.</p>
            <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </Col>
          <Col className='video-group-date'>
            <p>July 26, 2024</p>
          </Col>
        </Row>
        <Row>
          <Col className='video-1'>
            <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </Col>
          <Col className='video-2'>
            <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </Col>
        </Row>
      </Row>
      <Row className='photo-group-3'>
        <Col className='group-3-header'>
          <h1>PHOTO GROUP HEADER</h1>
          <p>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla.<br />Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor<br />ttitore ismod nulla. um sulla craspor ttitore ismod nulla.</p>
          <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
          </ svg>
        </Col>
        <Col className='group-3-date'>
          <p>July 26, 2024</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Gallery