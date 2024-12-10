import React, { useEffect } from 'react'
import './About.css'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js'
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

  const teamPhoto = "https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732609800/Team_szgirv.png"

  const inStateCosts = [5954, 7370, 4700]
  const outStateCosts = [20980, 7094, 5358]

  const doughnutDataInState = {
    labels: ['Tuition & Fees', 'Housing', 'Food'],
    datasets: [
      {
        data: inStateCosts,
        backgroundColor: ['#8540F5', '#0AA2C0', '#FFF0CA', '#F9CF64', '#E685B5'],
        borderColor: ['#8540F5', '#0AA2C0', '#FFF0CA', '#F9CF64', '#E685B5'],
        borderWidth: 1,
      },
    ],
  };

  const doughnutDataOutState = {
    labels: ['Tuition & Fees', 'Housing', 'Food'],
    datasets: [
      {
        data: outStateCosts,
        backgroundColor: ['#8540F5', '#0AA2C0', '#FFF0CA', '#F9CF64', '#E685B5'],
        borderColor: ['#8540F5', '#0AA2C0', '#FFF0CA', '#F9CF64', '#E685B5'],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = (total) => ({
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
        callbacks: {
          label: (tooltipItem) => `$${tooltipItem.raw.toLocaleString()}`,
        },
      },
      centerText: {
        display: true,
        total: `$${total.toLocaleString()}`,
      },
    },
  });

  const calculateTotal = (data) => data.reduce((a, b) => a + b, 0)
  const inStateTotal = calculateTotal(inStateCosts)
  const outStateTotal = calculateTotal(outStateCosts)

  const centerTextPlugin = {
    id: 'centerText',
    beforeDraw(chart) {
      const { width, height, ctx, canvas } = chart

      const container = canvas.parentNode;
      const fontSize = parseFloat(window.getComputedStyle(container).fontSize);

      ctx.restore()
      ctx.font = `${fontSize}px sans-serif`;
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'
      
      const total = chart.config.options.plugins.centerText.total
      const text = `${total.toLocaleString()}`
      const textX = (width / 2) + 55
      const textY = height / 2

      ctx.fillText(text, textX, textY)
      ctx.save()
    },
  }

  ChartJS.register(centerTextPlugin)

  return (
    <div className='about-main'>
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
            <h4>UCF Collegiate Cybersecurity Competition Team</h4>
          </div>
          <div className="right-column">
            <h5>A nationally recognized powerhouse in cybersecurity defense.</h5>
            <p className="description">
              Established in 2013, our team consistently excels in high-pressure environments, defending 
              against complex cyber threats while managing real-world business tasks. UCF's C3 team 
              continues to set standards in cybersecurity, preparing students for the challenges of tomorrow.
            </p>
          </div>
        </div>
        
        <div className="picture">
          <img src={teamPhoto} className="picture" alt="UCF C3 Team" />
        </div>
      </div>

      <div className='scholar' id='scholar-anchor'>
        <div className='wrapper'>
          <div className='left'>
            <div className='text'>
              <div className='quote'>ABOUT STUDENT BENEFITS</div>
              <h1>SCHOLARSHIP OPPORTUNITIES</h1>
              <p>
              UCF offers two scholarships that are particularly 
              geared towards students interested in pursuing the 
              cybersecurity field. These scholarships offer students 
              incredible opportunities that will set them up for future success.
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="5" viewBox="0 0 100 5" fill="none">
                <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
              </svg>
            </div>
          </div>
          <div className="tabs">
            <ul class="nav nav-underline custom-tabs" role="tablist" style={{ backgroundColor: '#FFF' }}>
              <li class="nav-item">
                <a class="nav-link active custom-tab-link" id="simple-tab-0" data-bs-toggle="tab" href="#simple-tabpanel-0" role="tab" aria-controls="simple-tabpanel-0" aria-selected="true" style={{ color: '#1D2130' }}>NSF CyberCorps SFS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link custom-tab-link" id="simple-tab-1" data-bs-toggle="tab" href="#simple-tabpanel-1" role="tab" aria-controls="simple-tabpanel-1" aria-selected="false" style={{ color: '#1D2130' }}>DoD CySP</a>
              </li>
            </ul>
            <div class="tab-content custom-tab-content" id="tab-content">
              <div class="tab-pane active" id="simple-tabpanel-0" role="tabpanel" aria-labelledby="simple-tab-0">
                <p><b>NSF CyberCorps Scholarship-for-Service Program</b></p>
                The SFS scholarship includes academic-year stipend of $25,000 per year for undergraduate students and $34,000 per year for graduate students, and additionally covers tuition and fees, 
                plus a professional allowance of up to $6,000 per academic year for SFS Job Fair and other travel, books, professional certifications, etc. 
                <br /><br />The scholarship normally lasts for two years. 
                Students will also be provided with research opportunities with the Cyber Security and Privacy Cluster faculty members.
                <div className='tab-button'>
                  <a href="https://cyber.cs.ucf.edu/sfs/" target="_blank" class="btn btn-primary">Learn More</a>
                </div>
              </div>
              <div class="tab-pane" id="simple-tabpanel-1" role="tabpanel" aria-labelledby="simple-tab-1">
                <p><b>Department of Defense Cybersecurity Scholarship Program (CySP)</b></p>
                Students selected to participate in the program receive the full coverage of tuition and required fees (including health care), 
                textbooks (from the institution and degree specific required book list, not books which are optional for the class), and a stipend. 
                <br /><br />The stipends are $29,000 for undergraduate students and $34,000 for graduate students for one year. Students must agree to serve one year of service to the DoD, upon graduation, 
                for each year or partial year of scholarship received (scholarship could last one year or two years).
                <div className='tab-button'>
                  <a href="https://cyber.cs.ucf.edu/cysp/" target="_blank" class="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grants full-bleed--blue' id='grants-anchor'>
        <div className='wrapper'>
          <div className='headline'>
            <p>ABOUT STUDENT BENEFITS</p>
            <h1>GRANTS AND AWARDS</h1>
          </div>
          <div className='features'>
            <div className='feature'>
              <img src={building} class="picture" alt='Buildings'/>
              <h4>SFS Scholarship</h4>
              <p>UCF has been awarded a nearly $2.9 million grant from the U.S. National Science Foundation for student scholarships.</p>
            </div>
            <div className='feature'>
              <img src={waves} class="picture" alt='Buildings'/>
              <h4>Cyber Innovation Lab</h4>
              <p>Lockheed Martin donated $1.5 million to UCF to help create the facility and fund software and technology to support the lab.</p>
            </div>
            <div className='feature'>
              <img src={hand} class="picture" alt='Buildings'/>
              <h4>Harris Cyber Fellowship</h4>
              <p>$40,000 two-year fellowship to a graduate student preparing for a career in cybersecurity with connections with C3</p>
            </div>
            <div className='feature'>
              <img src={droplet} class="picture" alt='Buildings'/>
              <h4>Dean's Scholarship</h4>
              <p>A scholarship for students persuing cybersecurity. EC-Council Univeristy covers 10% of a student's tuition.</p>
            </div>
            <div className='feature'>
              <img src={cat} class="picture" alt='Buildings'/>
              <h4>Maximum Effort</h4>
              <p>A cybersecurity scholarship that supports students within the CECS. A student may receive $2,000 for tuition, textbooks, etc.</p>
            </div>
            <div className='feature'>
              <img src={plant} class="picture" alt='Buildings'/>
              <h4>Raytheon Scholarship</h4>
              <p>$1,000 scholarship awarded to an undergraduate student preparing for a career in cybersecurity with connections with C3</p>
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
                    <h6>UCF Undergraduate Cost of Attendance (In-State)</h6>
                  </div>
                  <div className='frame'>
                    <div className='time'>2023-2024</div>
                  </div>
                </div>
                <div className='content'>
                  <div className='chart'>
                    <Doughnut data={doughnutDataInState} options={doughnutOptions(inStateTotal)} />
                  </div>
                </div>
              </div>
              <div className='chart2'>
                <div className='heading'>
                  <div className='title'>
                    <h6>UCF Undergraduate Cost of Attendance (Out-of-State)</h6>
                  </div>
                  <div className='frame'>
                    <div className='time'>2023-2024</div>
                  </div>
                </div>
                <div className='content'>
                  <div className='chart'>
                    <Doughnut data={doughnutDataOutState} options={doughnutOptions(outStateTotal)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='policies' id='policies-anchor'>
            <div className='policy'>
              <div className='lead'>ABOUT: TRAVEL POLICY</div>
              <h3>Travel Policy for Competitions</h3>
              <p>UCF will pay for all travel and hotel costs for all the C3 members participating in a competition. All C3 members must abide by University Behavioral Policies during any competition.</p>
            </div>
            <div className='policy'>
              <div className='lead'>ABOUT: UNIFORM POLICY</div>
              <h3>Uniform Policy for Competitions</h3>
              <p>All UCF C3 members must wear a UCF C3 team polo, khaki pants, black shoes, and a black belt during competitions. UCF supplies the C3 polo shirt for C3 team members. The black shoes, black belt and black socks are attire that need to be supplied by the members themselves.</p>
            </div>
          </div>
    </div>
  )
}

export default About