import React, { useEffect, useState } from 'react'
import './Roster.css'
import memberPhoto from './Images/Member.png'
import smallMember from './Images/Member_Small.png'
import fbIcon from './Images/Facebook.svg'
import liIcon from './Images/LinkedIn.svg'
import twIcon from './Images/Twitter.svg'
import RosterStories from './RosterStories'

const Roster = () => {
  const [members, setMembers] = useState(null)

  useEffect ( () => {
    document.title = "C3 Team @ UCF | Roster"

    const fetchMembers = async () => {
      const response = await fetch('https://ucf-c3-team-website-api.onrender.com/api/members')
      const json = await response.json()
      if (response.ok) {
        setMembers(json)
      }
    }

    fetchMembers()
  }, [])

  const coachMembers = members ? members.filter(member => member.classification === 'Coach') : [];
  const studentMembers = members ? members.filter(member => member.classification === 'Student') : [];
  console.log(members)

  return (
    <div>
      <div className='roster__header'>
        <div className='wrapper'>
          <div className='tagline'>
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="2" viewBox="0 0 72 2" fill="none">
              <path d="M0 1H72" stroke="#22495F" stroke-width="2"/>
            </svg>
            <div className='lead'>Our Team</div>
          </div>
        </div>
        <div className='main-content'>
          <div className='left-column'>
            <h4>UCF Collegiate Cyber Defense Competition Team</h4>
          </div>
          <div className='right-column'>
            <h5>A nationally recognized powerhouse in cybersecurity defense.</h5>
            <div className='base'>
              Established in 2013, our team consistently excels in high-pressure environments, 
              defending against complex cyber threats while managing real-world business tasks. UCF's C3 team 
              continues to set standards in cybersecurity, preparing students for the challenges of tomorrow.
            </div>
          </div>
        </div>
      </div>
      <div className='coaches full-bleed'>
        <div className='title'>
          <h1 id='coaches-anchor'>COACHES</h1>
          <div className='line'></div>
        </div>
        <div className='members'>
          <div className='member'>
            <div className='info'>
              <div>
                <div className='coach__photo'>
                  <img 
                    src={coachMembers && coachMembers[0]?.image ? `/${coachMembers[0].image}` : smallMember} 
                    className="picture" 
                    alt={coachMembers && coachMembers[0] ? `${coachMembers[0].name}'s profile` : 'Default profile picture'} 
                  />
                </div>
                <div className='name'>
                    {coachMembers && coachMembers[0] ? coachMembers[0].name : 'Default Name'}
                </div>
                <div className='role'>
                    {coachMembers && coachMembers[0] ? coachMembers[0].role : 'Default Role'}
                </div>
                <div className='social'>
                  <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                  <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                  <img src={liIcon} class="picture" alt='LinkedIn Icon' />
                </div>
              </div>
            </div>
          </div>
          <div className='member'>
            <div className='info'>
              <div>
                <div className='coach__photo'>
                  <img 
                    src={coachMembers && coachMembers[1]?.image ? `/${coachMembers[1].image}` : smallMember} 
                    className="picture" 
                    alt={coachMembers && coachMembers[1] ? `${coachMembers[1].name}'s profile` : 'Default profile picture'} 
                  />
                </div>
                <div className='name'>
                    {coachMembers && coachMembers[1] ? coachMembers[1].name : 'Default Name'}
                </div>
                <div className='role'>
                    {coachMembers && coachMembers[1] ? coachMembers[1].role : 'Default Role'}
                </div>
                <div className='social'>
                  <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                  <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                  <img src={liIcon} class="picture" alt='LinkedIn Icon' />
                </div>
              </div>
            </div>
          </div>
          <div className='member'>
            <div className='info'>
              <div>
                <div className='coach__photo'>
                  <img 
                    src={coachMembers && coachMembers[2]?.image ? `/${coachMembers[2].image}` : smallMember} 
                    className="picture" 
                    alt={coachMembers && coachMembers[2] ? `${coachMembers[2].name}'s profile` : 'Default profile picture'} 
                  />
                </div>
                <div className='name'>
                    {coachMembers && coachMembers[2] ? coachMembers[2].name : 'Default Name'}
                </div>
                <div className='role'>
                    {coachMembers && coachMembers[2] ? coachMembers[2].role : 'Default Role'}
                </div>
                <div className='social'>
                  <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                  <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                  <img src={liIcon} class="picture" alt='LinkedIn Icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='students'>
        <div className='title'>
          <h1 id='members-anchor'>MEMBERS</h1>
          <div className='line'></div>
        </div>
        <div className='members'>
          <div className='member'>
            <div className='info'>
              <div>
                <div className='member__photo'>
                  <img 
                    src={studentMembers && studentMembers[0]?.image ? `/${studentMembers[0].image}` : smallMember} 
                    className="picture" 
                    alt={studentMembers && studentMembers[0] ? `${studentMembers[0].name}'s profile` : 'Default profile picture'} 
                  />
                </div>
                <div className='name'>
                    {studentMembers && studentMembers[0] ? studentMembers[0].name : 'Default Name'}
                </div>
                <div className='role'>
                    {studentMembers && studentMembers[0] ? studentMembers[0].role : 'Default Role'}
                </div>
              </div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <div className='info'>
              <div>
                <div className='member__photo'>
                  <img 
                    src={studentMembers && studentMembers[1]?.image ? `/${studentMembers[1].image}` : smallMember} 
                    className="picture" 
                    alt={studentMembers && studentMembers[1] ? `${studentMembers[1].name}'s profile` : 'Default profile picture'} 
                  />
                </div>
                <div className='name'>
                    {studentMembers && studentMembers[1] ? studentMembers[1].name : 'Default Name'}
                </div>
                <div className='role'>
                    {studentMembers && studentMembers[1] ? studentMembers[1].role : 'Default Role'}
                </div>
              </div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <div className='info'>
              <div>
                <div className='member__photo'>
                  <img 
                    src={studentMembers && studentMembers[2]?.image ? `/${studentMembers[2].image}` : smallMember} 
                    className="picture" 
                    alt={studentMembers && studentMembers[2] ? `${studentMembers[2].name}'s profile` : 'Default profile picture'} 
                  />
                </div>
                <div className='name'>
                    {studentMembers && studentMembers[2] ? studentMembers[2].name : 'Default Name'}
                </div>
                <div className='role'>
                    {studentMembers && studentMembers[2] ? studentMembers[2].role : 'Default Role'}
                </div>
              </div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <div className='info'>
              <div>
                <div className='member__photo'>
                  <img 
                    src={studentMembers && studentMembers[3]?.image ? `/${studentMembers[3].image}` : smallMember} 
                    className="picture" 
                    alt={studentMembers && studentMembers[3] ? `${studentMembers[3].name}'s profile` : 'Default profile picture'} 
                  />
                </div>
                <div className='name'>
                    {studentMembers && studentMembers[3] ? studentMembers[3].name : 'Default Name'}
                </div>
                <div className='role'>
                    {studentMembers && studentMembers[3] ? studentMembers[3].role : 'Default Role'}
                </div>
              </div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <div className='info'>
              <div>
                <div className='member__photo'>
                  <img 
                    src={studentMembers && studentMembers[4]?.image ? `/${studentMembers[4].image}` : smallMember} 
                    className="picture" 
                    alt={studentMembers && studentMembers[4] ? `${studentMembers[4].name}'s profile` : 'Default profile picture'} 
                  />
                </div>
                <div className='name'>
                    {studentMembers && studentMembers[4] ? studentMembers[4].name : 'Default Name'}
                </div>
                <div className='role'>
                    {studentMembers && studentMembers[4] ? studentMembers[4].role : 'Default Role'}
                </div>
              </div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <div className='info'>
              <div>
                <div className='member__photo'>
                  <img 
                    src={studentMembers && studentMembers[5]?.image ? `/${studentMembers[5].image}` : smallMember} 
                    className="picture" 
                    alt={studentMembers && studentMembers[5] ? `${studentMembers[5].name}'s profile` : 'Default profile picture'} 
                  />
                </div>
                <div className='name'>
                    {studentMembers && studentMembers[5] ? studentMembers[5].name : 'Default Name'}
                </div>
                <div className='role'>
                    {studentMembers && studentMembers[5] ? studentMembers[5].role : 'Default Role'}
                </div>
              </div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <div className='info'>
              <div>
                <div className='member__photo'>
                  <img 
                    src={studentMembers && studentMembers[6]?.image ? `/${studentMembers[6].image}` : smallMember} 
                    className="picture" 
                    alt={studentMembers && studentMembers[6] ? `${studentMembers[6].name}'s profile` : 'Default profile picture'} 
                  />
                </div>
                <div className='name'>
                    {studentMembers && studentMembers[6] ? studentMembers[6].name : 'Default Name'}
                </div>
                <div className='role'>
                    {studentMembers && studentMembers[6] ? studentMembers[6].role : 'Default Role'}
                </div>
              </div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <div className='info'>
              <div>
                <div className='member__photo'>
                  <img 
                    src={studentMembers && studentMembers[7]?.image ? `/${studentMembers[7].image}` : smallMember} 
                    className="picture" 
                    alt={studentMembers && studentMembers[7] ? `${studentMembers[7].name}'s profile` : 'Default profile picture'} 
                  />
                </div>
                <div className='name'>
                    {studentMembers && studentMembers[7] ? studentMembers[7].name : 'Default Name'}
                </div>
                <div className='role'>
                    {studentMembers && studentMembers[7] ? studentMembers[7].role : 'Default Role'}
                </div>
              </div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RosterStories></RosterStories>
    </div>
  )
}

export default Roster