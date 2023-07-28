import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faChartLine, faQuestion, faCog, faTh, faUser } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
 
  const handleLogOff = () => {
    localStorage.setItem('WinEnterpriseToken', '');
  }

  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="left-icons">
          <div className="hamburger-icon">
            {/* Hamburger menu icon */}
            <FontAwesomeIcon icon={faBars} />
          </div>
          &nbsp;
          &nbsp;
          <div className="company-logo">
            {/* Company logo */}
            <FontAwesomeIcon icon={faChartLine} />
          </div>
        </div>

        <div className="center-icons">
          <div className="search-bar">
            {/* Search bar with search icon */}
            <input type="text" placeholder="Search..." />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>
        <div className="right-icons">
          <div className="question-icon">
            {/* Question icon */}
            <FontAwesomeIcon icon={faQuestion} />
          </div>
          &nbsp;
          &nbsp;
          <div className="configuration-icon">
            {/* Configuration icon */}
            <FontAwesomeIcon icon={faCog} />
          </div>
          &nbsp;
          &nbsp;
          <div className="waffle-menu-icon">
            {/* Waffle menu icon */}
            <FontAwesomeIcon icon={faTh} />
          </div>
          &nbsp;
          &nbsp;
          <div className="user-icon" onClick={() => handleLogOff()}>
            {/* User icon */}
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
