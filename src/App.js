import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import TopBar from './components/TopBar';

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  return (
    <div className="page-container">
      <TopBar/>
      <div className="App">
          <Menu onMenuItemClick={handleMenuItemClick} />
          <div className="center-screen">
            {activeMenuItem === 'dashboard' && <Dashboard />}
            {activeMenuItem !== 'dashboard' && 
              <div>
                <h1>{activeMenuItem.toUpperCase()}</h1>
              </div>}
          </div>
      </div>
    </div>
  );
}

export default App;
