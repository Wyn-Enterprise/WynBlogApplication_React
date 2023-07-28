import React, { useState } from 'react';
import DashboardViaIFrame from './DashboardViaIFrame';
import DashboardViaDiv from './DashboardViaDiv';
import DashboardLite from './DashboardLite';
import SignIn from './SignIn';
import dotenv from 'dotenv'

const Dashboard = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboardViaIFrame');
  const [token, setToken] = useState(localStorage.getItem('WinEnterpriseToken'));

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  const handleTokenValidated = (token) => {
    setToken(token);
    alert('handleTokenValidated')
  }

  const portalUrl = process.env.REACT_APP_PORTAL_URL;
  const dashboardId = process.env.REACT_APP_DASHBOARD_ID;

  return (

    <div className="dashboard">
      <h1>Financial Dashboard</h1>

      { !token && <SignIn onTokenValidated={handleTokenValidated}/> }

      { token && 
      <ul>
        <li
          className={activeMenuItem === 'dashboardViaIFrame' ? 'active' : ''}
          onClick={() => handleMenuItemClick('dashboardViaIFrame')}
        >
          Dashboard via iframe
        </li>
        <li
          className={activeMenuItem === 'dashboardViaDiv' ? 'active' : ''}
          onClick={() => handleMenuItemClick('dashboardViaDiv')}
        >
          Dashboard via div
        </li>
        <li
          className={activeMenuItem === 'dashboardLite' ? 'active' : ''}
          onClick={() => handleMenuItemClick('dashboardLite')}
        >
          Dashboard Live Viewer
        </li>
      </ul>
      }  

      {token && activeMenuItem === 'dashboardViaIFrame' && <DashboardViaIFrame portalUrl={portalUrl} dashboardId={dashboardId} token={token} />}
      {token && activeMenuItem === 'dashboardViaDiv' && <DashboardViaDiv portalUrl={portalUrl} dashboardId={dashboardId} token={token} />}
      {token && activeMenuItem === 'dashboardLite' && <DashboardLite portalUrl={portalUrl} dashboardId={dashboardId} token={token} />}
    </div>
  );
};

export default Dashboard;
