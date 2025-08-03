import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import AuthButton from './components/AuthButton';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      <AuthButton isLoggedIn={isLoggedIn} handleLoginLogout={handleLoginLogout} />
      <hr />
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
