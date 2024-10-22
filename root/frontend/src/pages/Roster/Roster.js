import React, { useEffect } from 'react'
import './Roster.css'
import memberPhoto from './Images/Member.png'
import smallMember from './Images/Member_Small.png'
import fbIcon from './Images/Facebook.svg'
import liIcon from './Images/LinkedIn.svg'
import twIcon from './Images/Twitter.svg'

const Roster = () => {

  useEffect ( () => {
    document.title = "C3 Team @ UCF | Roster"
  })

  return (
    <div>
      <header>
        <div className='wrapper'>
          <div className='tagline'>
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="2" viewBox="0 0 72 2" fill="none">
              <path d="M0 1H72" stroke="#22495F" stroke-width="2"/>
            </svg>
            <div className='lead'>Our Team</div>
          </div>
          <h4>UCF Collegiate Cyber Defense Competition Team</h4>
          <h5>A nationally recognized powerhouse in cybersecurity defense.</h5>
          <div className='base'>
            Established in 2013, our team consistently excels in high-pressure environments, 
            defending against complex cyber threats while managing real-world business tasks. UCF's CCDC team 
            continues to set standards in cybersecurity, preparing students for the challenges of tomorrow.
          </div>
        </div>
      </header>
      <div className='coaches full-bleed'>
        <div className='header'>
          <h1>COACHES</h1>
          <div className='line'></div>
        </div>
        <div className='members'>
          <div className='member'>
            <img src={memberPhoto} class="picture" alt='Team Member' />
            <div className='info'>
              <div className='name'>Leonard John Davies</div>
              <div className='role'>Head Coach</div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <img src={memberPhoto} class="picture" alt='Team Member' />
            <div className='info'>
              <div className='name'>Leonard John Davies</div>
              <div className='role'>Head Coach</div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <img src={memberPhoto} class="picture" alt='Team Member' />
            <div className='info'>
              <div className='name'>Leonard John Davies</div>
              <div className='role'>Head Coach</div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='students'>
        <div className='header'>
          <h1>MEMBERS</h1>
          <div className='line'></div>
        </div>
        <div className='members'>
          <div className='member'>
            <img src={smallMember} class="picture" alt='Team Member' />
            <div className='info'>
              <div className='name'>Leonard John Davies</div>
              <div className='role'>Cofounder, CEO</div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <img src={smallMember} class="picture" alt='Team Member' />
            <div className='info'>
              <div className='name'>Leonard John Davies</div>
              <div className='role'>Cofounder, CEO</div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <img src={smallMember} class="picture" alt='Team Member' />
            <div className='info'>
              <div className='name'>Leonard John Davies</div>
              <div className='role'>Cofounder, CEO</div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <img src={smallMember} class="picture" alt='Team Member' />
            <div className='info'>
              <div className='name'>Leonard John Davies</div>
              <div className='role'>Cofounder, CEO</div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <img src={smallMember} class="picture" alt='Team Member' />
            <div className='info'>
              <div className='name'>Leonard John Davies</div>
              <div className='role'>Cofounder, CEO</div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <img src={smallMember} class="picture" alt='Team Member' />
            <div className='info'>
              <div className='name'>Leonard John Davies</div>
              <div className='role'>Cofounder, CEO</div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <img src={smallMember} class="picture" alt='Team Member' />
            <div className='info'>
              <div className='name'>Leonard John Davies</div>
              <div className='role'>Cofounder, CEO</div>
              <div className='social'>
                <img src={fbIcon} class="picture" alt='Facebook Icon' style={{ marginRight: '26.577px' }} />
                <img src={twIcon} class="picture" alt='Twitter Icon' style={{ marginRight: '26.577px' }} />
                <img src={liIcon} class="picture" alt='LinkedIn Icon' />
              </div>
            </div>
          </div>
          <div className='member'>
            <img src={smallMember} class="picture" alt='Team Member' />
            <div className='info'>
              <div className='name'>Leonard John Davies</div>
              <div className='role'>Cofounder, CEO</div>
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
  )
}

export default Roster