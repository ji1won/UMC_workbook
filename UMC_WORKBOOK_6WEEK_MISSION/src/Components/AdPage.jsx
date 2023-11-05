import React, { Component } from 'react';
import Ad from "./Ad";

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAd: true, // 광고 표시 여부를 초기값으로 true로 설정
      showShowAdButton: false, // "광고 보기" 버튼 표시 여부
    };
  }

  // 광고 표시/숨김을 토글하는 메서드
  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd,
      showShowAdButton: !prevState.showShowAdButton,
    }));
  }

  // "광고 보기" 버튼 클릭 시 광고를 다시 표시하는 메서드
  handleShowAdClick = () => {
    this.setState({
      showAd: true,
      showShowAdButton: false,
    });
  }

  render() {
    return (
      <div>
        <Ad showAd={this.state.showAd} onToggleClick={this.handleToggleClick} />
        {this.state.showShowAdButton && (
          <button onClick={this.handleShowAdClick}>
            광고 보기
          </button>
        )}
      </div>
    );
  }
}

export default AdPage;
