import React, { Component } from 'react';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // 로그인 상태를 초기값으로 false로 설정
    };
  }

  // 로그인 상태를 토글하는 메서드
  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    // 로그인 상태에 따라 버튼 내용을 설정
    const buttonText = isLoggedIn ? '로그아웃' : '로그인';

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={isLoggedIn ? this.handleLogoutClick : this.handleLoginClick}
          style={{ backgroundColor: 'white' ,
          borderRadius: '10px' ,
          color : 'black',
          width: '80px', // 너비 조절
          height: '28px'  // 높이 조절
        }}
        >
          {buttonText}
        </button>
        <p style={{ marginLeft: '20px',
        color : 'white'
        }}>
          {isLoggedIn ? '환영합니다!' : '로그인이 필요합니다.'}
        </p>
      </div>
    );
  }
}

export default LoginControl;