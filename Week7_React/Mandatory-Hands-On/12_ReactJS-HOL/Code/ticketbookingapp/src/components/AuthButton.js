import React from 'react';

const AuthButton = ({ isLoggedIn, handleLoginLogout }) => {
  return (
    <button onClick={handleLoginLogout}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
};

export default AuthButton;
