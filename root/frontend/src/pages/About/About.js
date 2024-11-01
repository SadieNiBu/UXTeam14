import React, { useEffect } from 'react'
import './About.css'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js'
import teamPhoto from './Team.png'
import building from './Icons/Building.svg'
import waves from './Icons/Waves.svg'
import hand from './Icons/Hand.svg'
import droplet from './Icons/Droplet.svg'
import cat from './Icons/Cat.svg'
import plant from './Icons/Plant.svg'

ChartJS.register(ArcElement, Legend, Tooltip)

const About = () => {

  useEffect ( () => {
    document.title = "C3 Team @ UCF | About"
  })

  const doughnutData = {
    labels: ['Tuition', 'Books & Fees', 'Housing', 'Category 4', 'Category 5'],
    datasets: [
      {
        data: [50000, 25000, 15000, 7000, 3000],
        backgroundColor: ['#8540F5', '#0AA2C0', '#FFF0CA', '#F9CF64', '#E685B5'],
        borderColor: ['#8540F5', '#0AA2C0', '#FFF0CA', '#F9CF64', '#E685B5'],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'left',
        labels: {
          boxWidth: 11,
        }
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      <div className='about__header'>
        <div className="wrapper">
          <div className="tagline">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="2" viewBox="0 0 72 2" fill="none">
              <path d="M0 1H72" stroke="#495057" strokeWidth="2" />
            </svg>
            <div className="lead">About Us</div>
          </div>
        </div>

        <div className="main-content">
          <div className="left-column">
            <h4>UCF Collegiate Cyber Defense Competition Team</h4>
          </div>
          <div className="right-column">
            <h5>A nationally recognized powerhouse in cybersecurity defense.</h5>
            <p className="description">
              Established in 2013, our team consistently excels in high-pressure environments, defending 
              against complex cyber threats while managing real-world business tasks. UCF's CCDC team 
              continues to set standards in cybersecurity, preparing students for the challenges of tomorrow.
            </p>
          </div>
        </div>
        
        <div className="picture">
          <img src={teamPhoto} className="picture" alt="UCF CCDC Team" />
        </div>
      </div>

      <div className='scholar' id='scholar-anchor'>
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
                <a class="nav-link active custom-tab-link" id="simple-tab-0" data-bs-toggle="tab" href="#simple-tabpanel-0" role="tab" aria-controls="simple-tabpanel-0" aria-selected="true" style={{ color: '#1D2130' }}>Scholarship 1</a>
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

      <div className='grants full-bleed--blue'>
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

      <div className='pricing full-bleed--black'>
        <div className='wrapper'>
          <div className='statistics'>
            <div className='text'>
              <h1>We Want You To Make The Best Decision</h1>
              <p>We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
            </div>
            <div className='charts'>
              <div className='chart1'>
                <div className='heading'>
                  <div className='title'>
                    <h6>Cost of Attendance Chart at UCF</h6>
                  </div>
                  <div className='frame'>
                    <div className='metric'>
                      <p>US</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M9.8575 11.1004C10.3854 11.6282 11.2412 11.6282 11.769 11.1004L14.6366 8.23278C14.9885 7.88093 15.5589 7.88093 15.9108 8.23278C16.2626 8.58463 16.2626 9.15509 15.9108 9.50693L11.769 13.6487C11.2412 14.1765 10.3853 14.1765 9.8575 13.6487L5.71574 9.50693C5.36389 9.15508 5.36389 8.58463 5.71574 8.23278C6.06759 7.88093 6.63805 7.88093 6.98989 8.23278L9.8575 11.1004Z" fill="#343A40"/>
                      </svg>
                    </div>
                    <div className='period'>
                      <p>Today</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                        <path d="M10.484 11.1004C11.0118 11.6282 11.8676 11.6282 12.3955 11.1004L15.2631 8.23278C15.6149 7.88093 16.1854 7.88093 16.5372 8.23278C16.8891 8.58463 16.8891 9.15509 16.5372 9.50693L12.3955 13.6487C11.8676 14.1765 11.0118 14.1765 10.484 13.6487L6.34221 9.50693C5.99036 9.15508 5.99036 8.58463 6.34221 8.23278C6.69405 7.88093 7.26451 7.88093 7.61636 8.23278L10.484 11.1004Z" fill="#343A40"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='content'>
                  <div className='chart'>
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                  </div>
                </div>
              </div>
              <div className='chart2'>
                <div className='heading'>
                  <div className='title'>
                    <h6>Cost of Attendance Chart In-State</h6>
                  </div>
                  <div className='frame'>
                    <div className='metric'>
                      <p>US</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M9.8575 11.1004C10.3854 11.6282 11.2412 11.6282 11.769 11.1004L14.6366 8.23278C14.9885 7.88093 15.5589 7.88093 15.9108 8.23278C16.2626 8.58463 16.2626 9.15509 15.9108 9.50693L11.769 13.6487C11.2412 14.1765 10.3853 14.1765 9.8575 13.6487L5.71574 9.50693C5.36389 9.15508 5.36389 8.58463 5.71574 8.23278C6.06759 7.88093 6.63805 7.88093 6.98989 8.23278L9.8575 11.1004Z" fill="#343A40"/>
                      </svg>
                    </div>
                    <div className='period'>
                      <p>Today</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                        <path d="M10.484 11.1004C11.0118 11.6282 11.8676 11.6282 12.3955 11.1004L15.2631 8.23278C15.6149 7.88093 16.1854 7.88093 16.5372 8.23278C16.8891 8.58463 16.8891 9.15509 16.5372 9.50693L12.3955 13.6487C11.8676 14.1765 11.0118 14.1765 10.484 13.6487L6.34221 9.50693C5.99036 9.15508 5.99036 8.58463 6.34221 8.23278C6.69405 7.88093 7.26451 7.88093 7.61636 8.23278L10.484 11.1004Z" fill="#343A40"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='content'>
                  <div className='chart'>
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='policies' id='policies-anchor'>
            <div className='policy'>
              <div className='lead'>ABOUT OUR TRAVEL POLICY</div>
              <h3>Heading which concerns travel policy for competitions.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div className='policy'>
              <div className='lead'>ABOUT: UNIFORM POLICY</div>
              <h3>Heading which concerns uniform policy for competitions.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
          </div>
    </div>
  )
}

export default About