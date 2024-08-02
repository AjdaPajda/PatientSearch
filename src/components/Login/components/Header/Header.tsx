import React from 'react';
import './Header.css'; 

const Header: React.FC = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <body>
    <div className="header-container">
      <div className="left-content">
        <div className="sadasnjidatum">
          {currentDate}
        </div>
        <div>Wilkommen Doctor Grace</div>
        <div>Haben Sie noch einen schönen Arbeitstag</div>
      </div>
      <div className="right-content">
        <div className="profile">Profile</div>
      </div>
    </div>
    </body>
  );
};

export default Header;