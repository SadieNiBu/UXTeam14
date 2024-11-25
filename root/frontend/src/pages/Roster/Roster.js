import React, { useEffect, useState } from 'react';
import './Roster.css';
import smallMember from './Images/Member_Small.png';
import fbIcon from './Images/Facebook.svg';
import liIcon from './Images/LinkedIn.svg';
import twIcon from './Images/Twitter.svg';
import RosterStories from './RosterStories';

const Roster = () => {
  const [members, setMembers] = useState(null);

  useEffect(() => {
    document.title = "C3 Team @ UCF | Roster";

    const fetchMembers = async () => {
      const response = await fetch('https://ucf-c3-team-website-api.onrender.com/api/members');
      const json = await response.json();
      if (response.ok) {
        setMembers(json);
      }
    };

    fetchMembers();
  }, []);

  const coachMembers = members ? members.filter(member => member.classification === 'Coach') : [];
  const studentMembers = members ? members.filter(member => member.classification === 'Student') : [];
  
  const renderMemberCard = (member, isCoach = false) => {
    const defaultImage = smallMember;
    const memberImage = member?.imageUrl || defaultImage;

    return (
      <div className={`member ${isCoach ? 'coach' : ''}`}>
        <div className="info">
          <div>
            <div className={`${isCoach ? 'coach__photo' : 'member__photo'}`}>
              <img
                src={memberImage}
                className="picture"
                alt={member ? `${member.name}'s profile` : 'Default profile picture'}
              />
            </div>
            <div className="name">{member ? member.name : 'Default Name'}</div>
            <div className="role">{member ? member.role : 'Default Role'}</div>
            {{/* <div className="social">
              <img src={fbIcon} className="picture" alt="Facebook Icon" style={{ marginRight: '26.577px' }} />
              <img src={twIcon} className="picture" alt="Twitter Icon" style={{ marginRight: '26.577px' }} />
              <img src={liIcon} className="picture" alt="LinkedIn Icon" />
            </div> */}}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="roster__header">
        <div className="wrapper">
          <div className="tagline">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="2" viewBox="0 0 72 2" fill="none">
              <path d="M0 1H72" stroke="#22495F" strokeWidth="2" />
            </svg>
            <div className="lead">Our Team</div>
          </div>
        </div>
        <div className="main-content">
          <div className="left-column">
            <h4>UCF Collegiate Cyber Defense Competition Team</h4>
          </div>
          <div className="right-column">
            <h5>A nationally recognized powerhouse in cybersecurity defense.</h5>
            <div className="base">
              Established in 2013, our team consistently excels in high-pressure environments, defending against
              complex cyber threats while managing real-world business tasks. UCF's C3 team continues to set standards
              in cybersecurity, preparing students for the challenges of tomorrow.
            </div>
          </div>
        </div>
      </div>
      <div className="coaches full-bleed">
        <div className="title">
          <h1 id="coaches-anchor">COACHES</h1>
          <div className="line"></div>
        </div>
        <div className="members">
          {coachMembers.length > 0
            ? coachMembers.map((member, index) => renderMemberCard(member, true))
            : 'No coaches available'}
        </div>
      </div>
      <div className="students">
        <div className="title">
          <h1 id="members-anchor">MEMBERS</h1>
          <div className="line"></div>
        </div>
        <div className="members">
          {studentMembers.length > 0
            ? studentMembers.map((member) => renderMemberCard(member))
            : 'No members available'}
        </div>
      </div>
      <RosterStories />
    </div>
  );
};

export default Roster;