import React, { useEffect, useState } from 'react'
import './Roster.css'
import memberPhoto from './Images/Member.png'
import smallMember from './Images/Member_Small.png'
import fbIcon from './Images/Facebook.svg'
import liIcon from './Images/LinkedIn.svg'
import twIcon from './Images/Twitter.svg'
import story1 from './Images/Story1.png'

const Roster = () => {
  const [members, setMembers] = useState(null)

  useEffect ( () => {
    document.title = "C3 Team @ UCF | Roster"

    const fetchMembers = async () => {
      const response = await fetch('/api/members')
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
              defending against complex cyber threats while managing real-world business tasks. UCF's CCDC team 
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

      <div className='stories full-background'>
        <div className='top-vector'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="39" viewBox="0 0 1500 39" fill="none">
            <path d="M-58 -6.06519L421.121 39L471.777 11.0595L504.493 -6.06519H-58Z" fill="white"/>
            <path d="M1305.49 30.0652L1525 -15L1012.11 -13.0124L504.493 -6.06519L546.706 -3.0871L637.465 39L782.045 11.0595L1034.27 -3.0871L1305.49 30.0652Z" fill="white"/>
          </svg>
        </div>
        <div className='stories__header'>
          <h1>STUDENT SUCCESS STORIES</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="5" viewBox="0 0 100 5" fill="none">
            <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
          </svg>
        </div>
        <div className='wrapper' id='story-anchor'>
          <div className='story'>
            <div className='content'>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="112" height="84" viewBox="0 0 112 84" fill="none">
                <g opacity="0.12">
                  <path d="M85.1216 42.7282C95.5692 42.7282 102.61 48.2369 102.61 56.399C102.61 63.7439 94.5177 69.863 83.5577 69.863C71.553 69.863 62.6825 62.5181 62.6825 51.2989C62.6825 25.7985 87.2111 15.5984 102.61 14.3726V25.5917C92.1687 27.0193 80.4301 34.9746 79.9044 43.7522C80.4301 43.5504 82.513 42.7282 85.1216 42.7282ZM31.892 42.7282C42.3263 42.7282 49.3734 48.2369 49.3734 56.399C49.3734 63.7439 41.2815 69.863 30.3215 69.863C18.3168 69.863 9.44629 62.5181 9.44629 51.2989C9.44629 25.7985 33.9749 15.5984 49.3734 14.3726V25.5917C38.9325 27.0193 27.1939 34.9746 26.6682 43.7522C27.1939 43.5504 29.2768 42.7282 31.892 42.7282Z" fill="#050505"/>
                </g>
              </svg>
              <div className='author'>
                <h3>Simon Árpád</h3>
                <div className='body'>Global Accountability Officer</div>
              </div>
              <img src={story1} class="picture" alt='Student 1' />
            </div>
            <button type="button" class="btn btn-primary">
              Next
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                <path d="M8.87433 7.51437L4.8083 3.60539C4.69634 3.49801 4.63475 3.35445 4.63475 3.20138C4.63475 3.04821 4.69634 2.90474 4.8083 2.79719L5.16458 2.45485C5.27637 2.34714 5.42579 2.28784 5.58503 2.28784C5.74426 2.28784 5.89351 2.34714 6.00538 2.45485L10.8466 7.10882C10.959 7.21671 11.0205 7.36086 11.02 7.51411C11.0205 7.66804 10.959 7.81202 10.8466 7.91999L6.00989 12.5695C5.89802 12.6772 5.74877 12.7365 5.58945 12.7365C5.43021 12.7365 5.28096 12.6772 5.169 12.5695L4.8128 12.2271C4.58102 12.0043 4.58102 11.6416 4.8128 11.4188L8.87433 7.51437Z" fill="#343A40"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roster