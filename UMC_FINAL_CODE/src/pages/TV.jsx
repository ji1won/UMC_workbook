import React from 'react'
import TVList from '../Components/List'
import { tvs } from "../tvDummy";

export default function TV() {
    return (
      <div>
        <div className="movies-container">
          {tvs.results.map((item) => {
            return (
              <TVList
                name={item.name}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            );
          })}
        </div>
      </div>
    )
  }

 