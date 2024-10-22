import './Competition.css'
import TopPic from './toppic.png'
import PresPic from './president.png'
import CompPhoto from './competitionlogo.png'
import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"

const Competition = () => {

  useEffect ( () => {
    document.title = "C3 Team @ UCF | Competition"
  })

  return (
    <Container>
      <Row className='top'>
        <Col className='top-title'>
          <div>
            <div className='top-divider'>
              <svg width="72" height="2" viewBox="0 0 72 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H72" stroke="#22495F" stroke-width="2"/>
              </svg>
            </div>
            <div className='top-divider-text'>
              <p>What we do</p>
            </div>
          </div>
          <div>
            <div className='top-competitions'>
              <h3>Competitions</h3>
            </div>
            <div className='top-competitions-text'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius<br />enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor<br />interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
          </div>
        </Col>
        <Col className='top-pic'>
          <img src={TopPic} />
        </Col>
      </Row>
      <Row className='youtube'>
        <Col className='youtube-vid'>
          <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </Col>
        <Row className='youtube-textbox'>
          <Col>
            <div className='youtube-title'>
              <h1>It's just what we do</h1>
            </div>
            <div className='youtube-text'>
              <p>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.<br />Fermentum. Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper<br />venenatis. Fermentum.</p>
            </div>
            <div className='youtube-btn'>
              <button>Our YouTube</button>
            </div>
          </Col>
          <Col className='youtube-date'>
            <p>July 6, 2024</p>
          </Col>
        </Row>
      </Row>
      <Row className='more-than'>
        <Col>
          <div className='title text-center'>
            <h1>MORE THAN CCDC</h1>
          </div>
          <div className='subscript text-center'>
            <p>National Competitors in over 12 National and Regional Competitions</p>
          </div>
          <div className='top-pyramid text-center'>
            <img src={CompPhoto} />
            <img src={CompPhoto} />
            <img src={CompPhoto} />
            <img src={CompPhoto} />
            <img src={CompPhoto} />
          </div>
          <div className='mid-pyramid text-center'>
            <img src={CompPhoto} />
            <img src={CompPhoto} />
            <img src={CompPhoto} />
            <img src={CompPhoto} />
            <img src={CompPhoto} />
          </div>
          <div className='low-pyramid text-center'>
            <img src={CompPhoto} />
            <img src={CompPhoto} />
            <img src={CompPhoto} />
            <img src={CompPhoto} />
            <img src={CompPhoto} />
          </div>
        </Col>
      </Row>
      <Row className='top_line_decors'>
        <svg width="1" height="25" viewBox="0 0 1494 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 26L358 0L486 20.3538L528 26H250H0Z" fill="#000"/>
        <path d="M1276 16.2359L1494 26H994H744H528L578 20.3538L643 14.3L780 20.3538L1019 23.4189L1276 16.2359Z" fill="#000"/>
        </svg>
      </Row>
      <Row className='schedule'>
        <Col>
          <div className='title'>
            <h1>FALL 2024 COMPETITION<br />SCHEDULE</h1>
          </div>
          <div className='sc-divider'>
            <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </div>
        </Col>
        <Col>
          <div className='sc-vid text-center'>
            <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </div>
          <div className='sc-img text-center'>
            <img src={PresPic} />
          </div>
        </Col>
      </Row>
      <Row className='bottom_line_decors'>
        <svg width="1" height="28" viewBox="0 0 1494 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1494 0L1056 18L1008 8.68649L966 0H1244H1494Z" fill="#000"/>
        <path d="M218 28L0 0H500H750H966L916 8.68649L851 18L714 8.68649L475 3.97097L218 28Z" fill="#000"/>
        </svg>
      </Row>
      <Row className='awards'>
        <Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Competition