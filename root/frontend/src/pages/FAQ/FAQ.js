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
                <a className='certifications-link' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=9JVTfQDNqIU'>Click me!</a>
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
                <Accordion.Header>What does the application process look like?</Accordion.Header>
                <Accordion.Body>
                1. Attend the C3 Team Information Session (Optional): <br />
                At the start of each semester, the C3 Coach announces 
                or posts the date for an information session. Attendance is 
                recommended but not mandatory.
                <br />
                <br />
                2. Submit an Application and Résumé: <br />
                Complete the <a className='certifications-link' target="_blank" rel="noopener noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSc4Z3nYRpWBAYSg2qA3KK1CuyUp6zoOw9eECqRwk1uwCYCpHQ/viewform'>C3 Team Application</a> and attach an 
                up-to-date résumé. While applications are reviewed 
                on a rolling basis, submitting by the priority deadline 
                ensures consideration for the semester's team selection. 
                Priority deadlines and dates will vary each semester, so check 
                for updates regularly.
                <br />
                <br />
                3. Meet Eligibility Requirements: <br />
                To apply, you must: <br />
                <ul>
                  <li>Be an enrolled UCF student</li>
                  <li>Not be on academic probation</li>
                  <li>Not be subject to university disciplinary sanctions</li>
                </ul>
                4. Undergo the Selection Process: <br />
                After reviewing applications and résumés, 
                the C3 Coach will verify your eligibility and contact 
                selected applicants for an interview. At the coach's 
                discretion, you may also be asked to participate in 
                additional interviews with current team members or complete a 
                hands-on try-out exercise.
                <br />
                <br />
                5. Final Decision and Team Roster Announcement:<br />
                The C3 Coach will make final selections and 
                announce the team roster by the end of each selection period.
                <br />
                <br />
                Additional Notes:<br />
                <ul>
                <li>Team members are chosen based on merit without regard to gender, race, religion, or any other protected class.</li>
                <li>Team assignments for individual competitions depend on members’ strengths and the skills required for each competition.</li>
                </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What are the benefits of joining the C3 Team?</Accordion.Header>
                <Accordion.Body>
                You can develop hands-on technical skills and 
                consulting soft skills never taught in UCF courses. 
                Create lasting friendships with your teammates, and gain the 
                attention of companies who recruit students directly at competitions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Do I get excused from classes when I go to a competition?</Accordion.Header>
                <Accordion.Body>
                  Yes, team members receive official university 
                  business excuses from classes to travel and participate 
                  in competitions. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Do I need to join HACK@UCF in order to join the C3 Team?</Accordion.Header>
                <Accordion.Body>
                Yes, even though they are considered separate entities, you need to be a part
                 of HACK@UCF in order to be on the C3 Team.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>What skills are desirable for a prospective C3 team member?</Accordion.Header>
                <Accordion.Body>
                Experience with Linux/Windows Server Administration, experience 
                managing pfSense or Palo Alto Next Gen Firewalls, experience 
                configuring Cisco Switches, Routers and Wireless Access Points, 
                and experience managing virtual networks in AWS and Azure. We are also 
                interested in if you participated in US CyberPatriot or on a CTF team in high school.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>How do I build my skills to increase my chances of being on a C3 Team?</Accordion.Header>
                <Accordion.Body>
                You can be more involved in Hack@UCF 
                in order to learn more about cybersecurity through
                meetings, seminars, and workshops. You can also use online 
                training platforms, red/blue manuals, and gain certifications through<br/>
                <a className='certifications-link' target="_blank" rel="noopener noreferrer" href='https://www.cecs.ucf.edu/certification/'>UCF's CECS IT Certification Program</a>
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