import React, { useState } from 'react';
 

const SocialIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-container">
      {isOpen && (
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      )}

      {/* <div className="toggle-button" onClick={toggleIcons}>
        {isOpen ? '×' : '+'}
      </div> */}
      <div className="toggle-button" onClick={toggleIcons}>
        <i className="bi bi-chat-left-dots-fill" style={{ marginRight: '1px' }}></i>
        {isOpen ? '' : ''}
      </div>

    </div>
  );
};

export default SocialIcons;
