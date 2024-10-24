import './Press.css'
import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"

const Press = () => {

  useEffect ( () => {
    document.title = "C3 Team @ UCF | Press"
  })

  return (
    <Container>
      <Row className='article-header'>
        <Col>
        </Col>
      </Row>
      <Row className='articles'>
        <Row>
          <h1>RECENT ARTICLES</h1>
          <div className='article-div'>
            <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </div>
        </Row>
      </Row>
    </Container>
  )
}

export default Press