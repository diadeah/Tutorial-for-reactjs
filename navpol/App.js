// App.js
import React from 'react';
import './App.css';
import NavBar from './navbar';
import MainContent from './components/MainContent';

function App() {
  const backgroundImageUrl = 'https://podio.com/content/dam/podio/images/logos/podio-logo.svg'; // Replace with your online image URL

  const appStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="App" style={appStyle}>
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
