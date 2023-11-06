import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to="/Login">
      <button>로그인</button>
    </Link>
  );
};

export default LoginButton;