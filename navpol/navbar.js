// components/NavBar.js
import React from 'react';

const NavBar = () => {
  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in');
  };

  return (
    <nav className="navbar">
      <div className="auth-buttons">
        <button onClick={handleLogin}>Login</button>
      </div>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Use Cases</li>
        <li>Request a Demo</li>
        <li>
          More
          <ul className="dropdown">
            <li>Contact us</li>
            <li>Support</li>
            <li>Jobs</li>
            <li>Partners</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
