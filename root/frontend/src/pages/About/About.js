import React, { useEffect } from 'react'
import './About.css'
import teamPhoto from './Team.png'
import building from './Icons/Building.svg'
import waves from './Icons/Waves.svg'
import hand from './Icons/Hand.svg'
import droplet from './Icons/Droplet.svg'
import cat from './Icons/Cat.svg'
import plant from './Icons/Plant.svg'

const About = () => {

  useEffect ( () => {
    document.title = "C3 Team @ UCF | About"
  })

  return (
    <div>
      <div className='background'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1880" height="600" viewBox="0 0 1880 600" fill="none">
          <path d="M1648 601L-182.408 61L-232 303.609L1648 601Z" fill="#0A58CA"/>
          <path d="M1648 400.13L-182.408 1V61L1648 447.087V400.13Z" fill="#0A58CA"/>
          <path d="M-182.408 61L1648 447.087V400.13L-182.408 1V61ZM-182.408 61L1648 601L-232 303.609L-182.408 61Z" stroke="#0A58CA"/>
        </svg>
      </div>

      <header>
        <div className='wrapper'>
          <div className='tagline'>
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="2" viewBox="0 0 72 2" fill="none">
              <path d="M0 1H72" stroke="#495057" stroke-width="2"/>
            </svg> 
            <div className='lead'>About Us</div>
          </div>
          <h4>UCF Collegiate Cyber Defense Competition Team</h4>
          <h5>A nationally recognized powerhouse in cybersecurity defense.</h5>
          <p className='description'>
            Established in 2013, our team consistently excels in high-pressure environments, defending 
            against complex cyber threats while managing real-world business tasks. UCF's CCDC team 
            continues to set standards in cybersecurity, preparing students for the challenges of tomorrow.
          </p>
        </div>
        <div className='picture'>
            <img src={teamPhoto} class="picture" alt='UCF CCDC Team' />
        </div>
      </header>

      <div className='scholar'>
        <div className='wrapper'>
          <div className='left'>
            <div className='text'>
              <div className='quote'>ABOUT STUDENT BENEFITS</div>
              <h1>SCHOLARSHIP OPPORTUNITIES</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum 
                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero 
                vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae 
                risus tristique posuere.
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="5" viewBox="0 0 100 5" fill="none">
                <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
              </svg>
            </div>
          </div>
          <div className="tabs">
            <ul class="nav nav-underline custom-tabs" role="tablist" style={{ backgroundColor: '#FFF' }}>
              <li class="nav-item">
                <a class="nav-link active custom-tab-link" id="simple-tab-0" data-bs-toggle="tab" href="#simple-tabpanel-0" role="tab" aria-controls="simple-tabpanel-0" aria-selected="true" style={{ color: '#1D2130', borderBottomColor: '#F9CF64' }}>Scholarship 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link custom-tab-link" id="simple-tab-1" data-bs-toggle="tab" href="#simple-tabpanel-1" role="tab" aria-controls="simple-tabpanel-1" aria-selected="false" style={{ color: '#1D2130' }}>Scholarship 2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link custom-tab-link" id="simple-tab-2" data-bs-toggle="tab" href="#simple-tabpanel-2" role="tab" aria-controls="simple-tabpanel-2" aria-selected="false" style={{ color: '#525560' }}>Scholarship 3</a>
              </li>
            </ul>
            <div class="tab-content custom-tab-content" id="tab-content">
              <div class="tab-pane active" id="simple-tabpanel-0" role="tabpanel" aria-labelledby="simple-tab-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
              <br /><br />Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </div>
              <div class="tab-pane" id="simple-tabpanel-1" role="tabpanel" aria-labelledby="simple-tab-1">Tab 2 selected</div>
              <div class="tab-pane" id="simple-tabpanel-2" role="tabpanel" aria-labelledby="simple-tab-2">Tab 3 selected</div>
            </div>
            <button type="button" class="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      <div className='grants'>
        <div className='wrapper'>
          <div className='headline'>
            <p>ABOUT STUDENT BENEFITS</p>
            <h1>GRANTS AND AWARDS</h1>
          </div>
          <div className='features'>
            <div className='feature'>
              <img src={building} class="picture" alt='Buildings'/>
              <h4>Grant 1</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='feature'>
              <img src={waves} class="picture" alt='Buildings'/>
              <h4>Grant 2</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='feature'>
              <img src={hand} class="picture" alt='Buildings'/>
              <h4>Grant 3</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='feature'>
              <img src={droplet} class="picture" alt='Buildings'/>
              <h4>Grant 4</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='feature'>
              <img src={cat} class="picture" alt='Buildings'/>
              <h4>Grant 5</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='feature'>
              <img src={plant} class="picture" alt='Buildings'/>
              <h4>Grant 6</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='pricing'>
        <div className='wrapper'>
          <div className='headline'>
            <h1>Total Estimated Yearly Cost: <span style={{color: 'var(--colors-blue-blue-600, #0A58CA)'}}>$176</span></h1>
            <div className='line'></div>
          </div>
          <div className='breakdown'>
            <h2>Out-of-state Cost Breakdown</h2>
            <div className='table'>
              <div className='row'>
                <div className='text'>
                  <p>Tuition</p>
                </div>
                <div className='line'></div>
              </div>
              <div className='row'>
                <div className='text'>
                    <p>Housing</p>
                  </div>
                  <div className='line'></div>
              </div>
              <div className='row'>
                <div className='text'>
                    <p>Fees, books, etc.</p>
                  </div>
                  <div className='line2'></div>
              </div>
              <div className='row'>
                <div className='text'>
                    <p>Total Cost</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About