import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
    const navigate = useNavigate();
    const onClickMovieItem = () => {
        navigate(`/movie/${props.title}${props.overview}`, {
            state: props,
        });
    };
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div
            className="movie-container"
            onClick={onClickMovieItem}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="movie-poster">
            <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
            {isHovered && (
                <div className="movie-overview">
                    <p>{props.overview}</p>
                </div>
            )}
            </div>
            

            <div className="movie-info">
                <h4>{props.title}</h4>
                <span>{props.vote_average}</span>
            </div>
        </div>
    );
}
