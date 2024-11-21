import './Gallery.css'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Navigation, Pagination } from 'swiper/modules'

const Gallery = () => {
  const [ photos, setPhotos ] = useState(null)
  const col1Photo1Id = "67321e9fecd81c154c11eb9d"
  const col1Photo2Id = "67294852c57713e1168b3c8e"
  const col2Photo1Id = "67294918c57713e1168b3c98"
  const col2Photo2Id = "67294912c57713e1168b3c94"
  const col3PhotoId = "67295aa3c57713e1168b3cd3"
  const col4PhotoId = "67295aacc57713e1168b3cd7"

  useEffect ( () => {
    document.title = "C3 Team @ UCF | Gallery"

    const fetchPhotos = async () => {
      const response = await fetch('https://ucf-c3-team-website-api.onrender.com/api/photos')
      const json = await response.json()
      if (response.ok) {
        setPhotos(json)
      }
    }
    
    fetchPhotos()
  }, [])

  const col1Photo1 = photos ? photos.find(photo => photo._id === col1Photo1Id) : null
  const col1Photo2 = photos ? photos.find(photo => photo._id === col1Photo2Id) : null
  const col2Photo1 = photos ? photos.find(photo => photo._id === col2Photo1Id) : null
  const col2Photo2 = photos ? photos.find(photo => photo._id === col2Photo2Id) : null
  const col3Photo = photos ? photos.find(photo => photo._id === col3PhotoId) : null
  const col4Photo = photos ? photos.find(photo => photo._id === col4PhotoId) : null

  return (
    <Container className='gallery-div'>
      <Row className='gallery-header text-center'>
        <h1>Photo Gallery</h1>
        <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
        </svg>
      </Row>
      <Row className='photo-group-1'>
        <Row>
          <Col className='group-1-header'>
            <h1>ISTS 2024</h1>
            <p>Winning comes natrual to UCF's C3 team. Take a glance at just one<br />victory from our trip to RIT for the 2024 Information<br />Security Talent Search Competition.</p>
            <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
            <div className='col-1-photo-group'>
              <div className='col-1-photo-1'>
                <img 
                src={col1Photo1 ? col1Photo1.image : ''}
                className="img-fluid"
                />
              </div>
              <div className='col-1-photo-2'>
                <img 
                src={col2Photo1 ? col2Photo1.image : ''}
                className="img-fluid"
                />
              </div>
            </div>
          </Col>
          <Col className='group-1-date'>
            <p>March 1, 2024</p>
          </Col>
          <div className='col-2-photo-group'>
              <div className='col-2-photo-1'>
                <img
                src={col1Photo2 ? col1Photo2.image : ''}
                className="img-fluid"
                />
              </div>
              <div className='col-2-photo-2'>
                <img 
                src={col2Photo2 ? col2Photo2.image : ''}
                className="img-fluid"
                />
              </div>
            </div>
        </Row>
      </Row>
      <Row className='photo-group-2'>
        <Row>
          <Col className='group-2-header'>
            <h1>NCCDC 2024</h1>
            <p>In 2024, our C3 team had the honor of attending our 6th National Collegiate Cyber Defense<br />Competition. After the two day event concluded, we were able to successfully defend<br />our title as National Champion and return home with the Alamo Cup.</p>
            <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </Col>
          <Col className='group-2-date'>
            <p>April 25, 2024</p>
          </Col>
          <Row className='group-2-photos'>
            <div className='group-2-container'>
            <Col className='col-3-photo' >
              <img 
              src={col3Photo ? col3Photo.image : ''}
              className="img-fluid"
              />
            </Col>
            <Col className='col-4-photo' >
              <img 
              src={col4Photo ? col4Photo.image : ''}
              className="img-fluid"
              />
            </Col>
            </div>
          </Row>
        </Row>
      </Row>
      <Row className='video-group'>
        <Row>
          <Col className='video-group-header'>
            <h1>An Inside Look</h1>
            <p>Competitions are the soul of everything we do here at C3. Get a look at what<br />competitions have in store for each of our members.</p>
            <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </Col>
        </Row>
        <Row>
          <Col className='video-1'>
            <iframe
            src="https://www.youtube.com/embed/8CPYyUDzfp4?si=XLs0MbiG1YdRD3Mf">
            </iframe>
          </Col>
          <Col className='video-2'>
            <iframe
            src="https://www.youtube.com/embed/hkiWMph4RsY?si=6gsd6AGHI1wvnc3S">
            </iframe>
          </Col>
        </Row>
      </Row>
      <Row className='photo-group-3'>
        <Col className='group-3-header'>
          <h1>Our Rich History</h1>
          <p>Take a look through C3's illustrious past depicted through photos of our<br />team's best and brightest in their elemenet. Here at C3, we've established<br />a community of excellence that we hope reflects in these photos.</p>
          <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
          </ svg>
        </Col>
        <Row className='swiper-row'>
          {photos && photos.length > 0 && (
            <Swiper
            navigation
            pagination={{ type: 'fraction' }}
            modules={[Navigation, Pagination]}
            >
          {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className='swiper-photo'>
            <img src={photo.image} alt={`Slide ${index + 1}`} className="img-fluid" />
            </div>
          </SwiperSlide>
          ))}
          </Swiper>
        )}
        </Row>
      </Row>
    </Container>
  )
}

export default Gallery