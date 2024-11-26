import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainComponents from "./components/MainComponents"
import './App.css';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app-container">
      <Header onHamburgerClick={handleHamburgerClick} />
      <div className="main-layout">
        <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
        <MainComponents/>
      </div>
    </div>
  );
};

export default App;
