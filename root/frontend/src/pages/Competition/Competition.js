import './Competition.css'
import TopPic from './toppic.png'
import Circle from './eclipse.png'
import Twenty from './2020.png'
import TwentyOne from './2021.png'
import TwentyTwo from './2022.png'
import TwentyThree from './2023.png'
import TwentyFour from './2024.png'
import PresPic from './president.png'
import firstPlace from './1st-place.png'
import thirdPlace from './3rd-place.png'
import secondPlace from './2nd-place.png'
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
          <div className='top-competitions-div'>
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
        <Col className='youtube-vid text-center'>
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
              <button class='btn btn-primary'><a href='https://www.youtube.com/watch?v=PLNluCohtZ4&t=58s'>Our YouTube</a></button>
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
      <Row className='schedule' id='schedule-anchor'>
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
      <Row className='awards' id='awards-anchor'>
        <Col>
          <div className='awards-title'>
            <h1>AWARDS AND RECOGNITIONS</h1>
          </div>
        </Col>
        <Row className='awards-medals'>
          <Col className='champs text-center'>
            <div className='first-place'>
              <img src={firstPlace} />
            </div>
            <div className='medal text-center'>
              <div className='circle'>
                <img src={Circle} />
              </div>
            </div>
            <div className='champs-num'>
              <h1>5</h1>
            </div>
            <div className='champs-title'>
              <h5>CCDC National<br />Championships</h5>
            </div>
            <div className='champs-date'>
              <p>2014, 2015, 2016, 2021, 2022</p>
            </div>
          </Col>
          <Col className='runner-up-1 text-center'>
            <div className='second-place'>
              <img src={secondPlace} />
            </div>
            <div className='medal text-center'>
              <div className='circle'>
                <img src={Circle} />
              </div>
            </div>
            <div className='champs-num'>
              <h1>3</h1>
            </div>
            <div className='champs-title'>
              <h5>CCDC National<br />Runner-Up Finishes</h5>
            </div>
            <div className='champs-date'>
              <p>2018, 2019, 2020</p>
            </div>
          </Col>
          <Col className='runner-up-2 text-center'>
            <div className='third-place'>
              <img src={thirdPlace} />
            </div>
            <div className='medal text-center'>
              <div className='circle'>
                <img src={Circle} />
              </div>
            </div>
            <div className='champs-num'>
              <h1>3</h1>
            </div>
            <div className='champs-title'>
              <h5>CCDC National<br />Runner-Up Finishes</h5>
            </div>
            <div className='champs-date'>
              <p>2018, 2019, 2020</p>
            </div>
          </Col>
        </Row>
      </Row>
      <Row className='timeline'>
        <Col className='col-1'>
          <h1>CCDC@UCF OVER RECENT YEARS</h1>
          <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
          </svg>
          <div className='col-1-video'>
              <h1>2024</h1>
              <p> Proin cras id semper tellus euismod aenean est a egestas.<br />Rutrum in ipsum vivamus nunc dignissim sit.<br />Proin cras id s sit.....</p>
              <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>
          </div>
          <div className='col-2-video'>
              <h1>2022</h1>
              <p> Proin cras id semper tellus euismod aenean est a egestas.<br />Rutrum in ipsum vivamus nunc dignissim sit.<br />Proin cras id s sit.....</p>
              <img src={PresPic} />
          </div>
          <div className='col-3-video'>
              <h1>2024</h1>
              <p> Proin cras id semper tellus euismod aenean est a egestas.<br />Rutrum in ipsum vivamus nunc dignissim sit.<br />Proin cras id s sit.....</p>
              <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>
          </div>
        </Col>
        <Col>
          <div className='twenty-four text-center'>
            <img src={TwentyFour} />
          </div>
          <div className='twenty-four-div text-center'>
            <svg width="3" height="301" viewBox="0 0 3 301" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="2" height="300" transform="matrix(-1 0 0 1 2.08789 0.373047)" fill="#6C757D"/>
            </svg>
          </div>
          <div className='twenty-three text-center'>
            <img src={TwentyThree} />
          </div>
          <div className='twenty-three-div text-center'>
            <svg width="3" height="301" viewBox="0 0 3 301" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="2" height="300" transform="matrix(-1 0 0 1 2.08789 0.373047)" fill="#6C757D"/>
            </svg>
          </div>
          <div className='twenty-two text-center'>
            <img src={TwentyTwo} />
          </div>
          <div className='twenty-two-div text-center'>
            <svg width="3" height="301" viewBox="0 0 3 301" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="2" height="300" transform="matrix(-1 0 0 1 2.08789 0.373047)" fill="#6C757D"/>
            </svg>
          </div>
          <div className='twenty-one text-center'>
            <img src={TwentyOne} />
          </div>
          <div className='twenty-one-div text-center'>
            <svg width="3" height="301" viewBox="0 0 3 301" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="2" height="300" transform="matrix(-1 0 0 1 2.08789 0.373047)" fill="#6C757D"/>
            </svg>
          </div>
          <div className='twenty text-center'>
            <img src={Twenty} />
          </div>
        </Col>
        <Col className='col-2'>
         <div className='col-4-video'>
              <h1>2022</h1>
              <p> Proin cras id semper tellus euismod aenean est a egestas.<br />Rutrum in ipsum vivamus nunc dignissim sit.<br />Proin cras id s sit.....</p>
              <img src={PresPic} />
          </div>
          <div className='col-5-video'>
              <h1>2024</h1>
              <p> Proin cras id semper tellus euismod aenean est a egestas.<br />Rutrum in ipsum vivamus nunc dignissim sit.<br />Proin cras id s sit.....</p>
              <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>
          </div>
        </Col>
      </Row>
      <Row className='history'>
        <Col>
          <div className='history-title'>
            <h1>MORE COMPETITION HISTORY</h1>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Competition