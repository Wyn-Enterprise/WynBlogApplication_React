import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faChartPie, faCalendarAlt, faFileAlt, faMoneyBill, faCreditCard, faDollarSign, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ onMenuItemClick }) => {
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const handleMenuItemClick = (item) => {
    onMenuItemClick(item);
    setActiveMenuItem(item);
  };

  return (
    <div className="menu-container left-menu">
      <div className="menu-items">
        <div className="menu-group">
          <h2>Main</h2>
          <ul>
            <li
              className={activeMenuItem === 'overview' ? 'active' : ''}
              onClick={() => handleMenuItemClick('overview')}
            >
              <FontAwesomeIcon icon={faTachometerAlt} />
              Overview
            </li>
            <li
              className={activeMenuItem === 'dashboard' ? 'active' : ''}
              onClick={() => handleMenuItemClick('dashboard')}
            >
              <FontAwesomeIcon icon={faChartPie} />
              Dashboard
            </li>
            <li
              className={activeMenuItem === 'reports' ? 'active' : ''}
              onClick={() => handleMenuItemClick('reports')}
            >
              <FontAwesomeIcon icon={faFileAlt} />
              Reports
            </li>
            <li
              className={activeMenuItem === 'scheduler' ? 'active' : ''}
              onClick={() => handleMenuItemClick('scheduler')}
            >
              <FontAwesomeIcon icon={faCalendarAlt} />
              Scheduler
            </li>
          </ul>
        </div>

        <div className="menu-group">
          <h2>Accounts</h2>
          <ul>
            <li
              className={activeMenuItem === 'cash' ? 'active' : ''}
              onClick={() => handleMenuItemClick('cash')}
            >
              <FontAwesomeIcon icon={faMoneyBill} />
              Cash
            </li>
            <li
              className={activeMenuItem === 'creditCard' ? 'active' : ''}
              onClick={() => handleMenuItemClick('creditCard')}
            >
              <FontAwesomeIcon icon={faCreditCard} />
              Credit Card
            </li>
            <li
              className={activeMenuItem === 'asset' ? 'active' : ''}
              onClick={() => handleMenuItemClick('asset')}
            >
              <FontAwesomeIcon icon={faDollarSign} />
              Asset
            </li>
            <li
              className={activeMenuItem === 'investment' ? 'active' : ''}
              onClick={() => handleMenuItemClick('investment')}
            >
              <FontAwesomeIcon icon={faPiggyBank} />
              Investment
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
