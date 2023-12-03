import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../Components/Movie';

export default function MovieDetail() {
  const { title, overview } = useParams();
  const { state } = useLocation();

  return (
    <div className="movie-page-container">
      <img className="poster" src={IMG_BASE_URL + state.poster_path} alt="영화 포스터 이미지" />
      <div className="movie-details">
        <div className="Movie-title">{title}</div>
        <div className="Overview">{overview}</div>
      </div>
    </div>
  );
}
