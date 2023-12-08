import React from 'react';
import './TeamCard.css'

function TeamCard({member}) {
  return (
    <div className='team-card'>
      <img src={member.imgSrc} alt={member.imgSrc} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>
  );
}

export default TeamCard;
