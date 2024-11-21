import React, { useEffect } from 'react'
import './FAQ.css'
import Accordion from 'react-bootstrap/Accordion'

const FAQ = () => {

  useEffect ( () => {
    document.title = "C3 Team @ UCF | FAQ"
  })

  return (
    <div>
      <header>
        <div className="wrapper">
          <h3>Frequently Asked Questions</h3>
          <p>
          Here is where we have answered some common 
          questions you might have regarding UCF's official C3 Team. Please
          feel free to reach out to us with any unanswered questions or concerns!
          </p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </div>
        </div>
      </header>
      <div className='faq'>
        <div className='wrapper'>
          <div className='questions'>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is CCDC?</Accordion.Header>
                <Accordion.Body>
                CCDC is a national cybersecurity competition 
                hosted by UTSA, which tests the skills of students as 
                they attempt to defend against a hack/breach of their 
                infrastructure. The video provides more on the competition:<br />
                <a className='certifications-link' href='https://www.youtube.com/watch?v=9JVTfQDNqIU'>https://www.youtube.com/watch?v=9JVTfQDNqIU</a>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Is the C3 Team open to everyone?</Accordion.Header>
                <Accordion.Body>
                Yes, the C3 Team is open to everyone, but there 
                is a competitive application process in order to be 
                considered for the team. The coach of the team ends up
                 making the final decisions on who gets to compete in any given 
                 competition based on skill set and team fit. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What are the benefits of joining the C3 Team?</Accordion.Header>
                <Accordion.Body>
                You can develop hands-on technical skills and 
                consulting soft skills never taught in UCF courses. 
                Create lasting friendships with your teammates, and gain the 
                attention of companies who recruit students directly at competitions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Do I get excused from classes when I go to a competition?</Accordion.Header>
                <Accordion.Body>
                  Yes, team members receive official university 
                  business excuses from classes to travel and participate 
                  in competitions. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Do I need to join HACK@UCF in order to join the C3 Team?</Accordion.Header>
                <Accordion.Body>
                Yes, even though they are considered separate entities, you need to be a part
                 of HACK@UCF in order to be on the C3 Team.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>What skills are desirable for a prospective C3 team member?</Accordion.Header>
                <Accordion.Body>
                Experience with Linux/Windows Server Administration, experience 
                managing pfSense or Palo Alto Next Gen Firewalls, experience 
                configuring Cisco Switches, Routers and Wireless Access Points, 
                and experience managing virtual networks in AWS and Azure. We are also 
                interested in if you participated in US CyberPatriot or on a CTF team in high school.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>How do I build my skills to increase my chances of being on a C3 Team?</Accordion.Header>
                <Accordion.Body>
                You can be more involved in Hack@UCF 
                in order to learn more about cybersecurity through
                meetings, seminars, and workshops. You can also use online 
                training platforms, red/blue manuals, and gain certifications through<br/>
                <a className='certifications-link' href='https://www.cecs.ucf.edu/certification/'>UCF's CECS IT Certification Program</a>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ