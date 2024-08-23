import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/TeamMemberPopup.css';

const TeamMemberPopup = ({ member, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={member.image} alt={member.name} className="popup-image" />
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <p>{member.description}</p>
        <div className="social-media-icons">
          <a href={member.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href={member.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberPopup;
