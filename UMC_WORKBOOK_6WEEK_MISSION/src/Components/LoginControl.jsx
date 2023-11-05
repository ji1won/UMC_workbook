import React, { useState } from 'react';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const buttonText = isLoggedIn ? '로그아웃' : '로그인';

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}
        style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          color: 'black',
          width: '80px',
          height: '28px',
        }}
      >
        {buttonText}
      </button>
      <p
        style={{
          marginLeft: '20px',
          color: 'white',
        }}
      >
        {isLoggedIn ? '환영합니다!' : '로그인이 필요합니다.'}
      </p>
    </div>
  );
}

export default LoginControl;
