import './Gallery.css'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Navigation, Pagination } from 'swiper/modules'

const Gallery = () => {
  const [ photos, setPhotos ] = useState(null)

  const col1Photos = [
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732470718/c3_uploads/d2nlhhu7vqavrzftqxav.png",
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732470800/c3_uploads/bm1f5uh0uuvlk1ctf53j.png",
  ];
  const col2Photos = [
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732470754/c3_uploads/khxa3mfnbk6gin5fopcw.png",
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732470820/c3_uploads/zvfquimeufoygm8rdg4p.png",
  ];
  const col3Photos = [
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732471130/c3_uploads/mmuokgbaa4hm4obaxpi9.png",
  ];
  const col4Photos = [
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732471153/c3_uploads/s6vac5fuhoi1ikwq9pn9.png",
  ];

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
            <p>Winning comes natural to UCF's C3 team. Take a glance at just one<br />victory from our trip to RIT for the 2024 Information<br />Security Talent Search Competition.</p>
            <svg width="100" height="5" viewBox="0 0 100 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </Col>
            <div className='photo-grid-wrapper'>
              <div className='column'>
                <div className='photo photo-1'>
                  <img 
                  src={col1Photos[0]}
                  />
                </div>
                <div className='photo photo-2'>
                  <img 
                  src={col1Photos[1]}
                  />
                </div>
              </div>
              <div className='column'>
                <div className='photo photo-3'>
                  <img
                  src={col2Photos[0]}
                  />
                </div>
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
          <Row className='group-2-photos'>
          <div className='photo-grid-wrapper-2'>
            <div className='column' >
              <div className='photo photo-4'>
                <img 
                src={col3Photos[0]}
                className="img-fluid"
                />
              </div>
            </div>
            <div className='column' >
              <div className='photo photo-5'>
                <img 
                src={col4Photos[0]}
                className="img-fluid"
                />
              </div>
            </div>
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
          <p>Take a look through C3's illustrious past depicted through photos of our<br />team's best and brightest in their element. Here at C3, we've established<br />a community of excellence that we hope reflects in these photos.</p>
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
          {photos.map((photo) => (
          <SwiperSlide key={photo._id}>
            <div className='swiper-photo'>
            <img src={photo.imageUrl} alt={`Slide ${photo._id}`} className="img-fluid" />
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