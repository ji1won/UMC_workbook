import React from 'react'

export default function TVList(props){
    return (
        <div className="tv-container" >
            <div className="tv-list">
            <h4>{props.name}</h4>
            </div>
        </div>
        );
}
