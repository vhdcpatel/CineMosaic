import React from 'react';
import { useSelector } from 'react-redux';

import "./Genres.css";

const Genres = ({data}) => {
  const genres = useSelector((state) => state.home.genres);
  
  
  return (
    <div className='genres'>
      {data?.map((id)=> {
        if (!genres[id]) return;
          return (
            <div key={id} className="genre">
              {genres[id]}
            </div>
          );
      })}
    </div>
  )
}

export default Genres