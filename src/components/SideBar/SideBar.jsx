import React, { useState } from 'react';
import CurrencyConverterPage from '../../pages/CurrencyConvertorPage/CurrencyConvertorPage.jsx'; 
import './SideBar.scss'

function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="app">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span role="img" aria-label="currency">
          💰
        </span>
      </button>
      <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>
          ✖
        </button>
        <CurrencyConverterPage />
      </div>
      <div className="main-content">
        <h1>Welcome to Braincoins!</h1>
        <p>Click the icon to convert your custom currencies.</p>
      </div>
    </div>
  );
}
export default Sidebar;