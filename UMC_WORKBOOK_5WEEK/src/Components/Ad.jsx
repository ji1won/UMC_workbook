import React from 'react';
import adImage from './image.svg';

function Ad({ showAd, onToggleClick }) {
  // 광고 표시 여부에 따라 렌더링을 조절
  return (
    <div>
      {showAd ? (
        <div>
          <img
            src={adImage}
            alt="광고 배너"
            style={{ width: '100%' }}
          />
          <button onClick={onToggleClick}>
            광고 안보기
          </button>
          
        </div>
      ) : null}
    </div>
  );
}

export default Ad;
