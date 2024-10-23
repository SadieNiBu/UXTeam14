import React, { useEffect } from 'react'
import './Home.css'
import hero from './Images/hero.jfif'
import pic1 from './Images/section1.png'

const Home = () => {

  useEffect ( () => {
    document.title = "C3 Team @ UCF"
  })

  return (
    <div>
      <div className='hero'>
        <img src={hero} class="picture" alt='UCF C3 Team' />
        <div className='header'>
          <h3>Meet UCF's Collegiate Cyber Defense Team</h3>
          <p>Some subtext goes here and looks cool. </p>
          <button type="button" class="btn btn-primary">See More</button>
        </div>
      </div>
      <div className='section-1'>
        <div className='wrapper'>
          <img src={pic1} class="picture" alt='UCF C3 Team' />
          <div className='text'>
            <div className='quote'>WE ARE ALWAYS UP</div>
            <h1>FOR A CHALLENGE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, 
              ut commodo diam libero vitae erat. Aenean faucibus nibh et justo 
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="5" viewBox="0 0 100 5" fill="none">
              <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home