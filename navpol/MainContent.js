// components/MainContent.js
import React, { useState } from 'react';

const MainContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSignUp = () => {
    if (validateEmail(email)) {
      // Perform signup logic here
      console.log('Signing up with email:', email);
      console.log('Full Name:', fullName);
      console.log('Password:', password);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const handleLogin = () => {
    setShowForm(!showForm);
  };

  const validateEmail = (email) => {
    // Basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="main-content">
      <div className="background-image"></div>
      <div className="center-middle">
        <input type="text" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
        <button onClick={handleSignUp}>Start Free</button>
      </div>
      {showForm ? (
        <div className="form-container">
          <input type="text" placeholder="Your full name" value={fullName} onChange={handleFullNameChange} />
          <input type="password" placeholder="Create a password" value={password} onChange={handlePasswordChange} />
        </div>
      ) : null}
      <button onClick={handleLogin}>{showForm ? 'Submit' : 'Login'}</button>
    </div>
  );
};

export default MainContent;
