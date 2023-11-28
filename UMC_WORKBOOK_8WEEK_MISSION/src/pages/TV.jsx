import React from 'react'
import TVList from '../Components/List'
import { tvs } from "../tvDummy";

export default function TV() {
    return (
      <div>
        <div className="tv-container">
          {tvs.results.map((item) => {
            return (
              <TVList
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    )
  }
  
 