import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../redux/reducers/authSlice.js';
import '../LoginButton.css'; // Import CSS file to style LoginButton

const LoginButton = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const LogoutFunc = () => {
    dispatch(clearUser(userInfo));
    localStorage.removeItem('userID'); // ID 삭제
    localStorage.removeItem('userToken'); // 토큰 삭제
  };

  return (
    <div className="loginButtonContainer">
      {isLoggedIn ? (
        <div className="loggedInContainer">
          <button className="logoutButton" onClick={LogoutFunc}>로그아웃</button>
          <p className="loggedInText">{`${userInfo}`}님, 안녕하세요!</p>
        </div>
      ) : (
        <div className="loggedOutContainer">
          <Link to="/Login">
            <button className="loginLinkButton">로그인</button>
          </Link>
          <p className="loggedOutText">로그인 해주세요.</p>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
