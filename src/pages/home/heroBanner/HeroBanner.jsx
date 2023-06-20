import React, { useEffect, useState } from 'react'
import "./HeroBanner.css"
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';


const HeroBanner = () => {

  const [background,setBackground] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const { data, loading } = useFetch("/movie/upcoming");
  const url = useSelector((state) => state.home.url);

  useEffect(()=>{
    const backGroundLink = url.backdrop + data?.results[Math.floor(Math.random()*21)]?.backdrop_path;
    setBackground(backGroundLink);
  },[data])

  const  navigate = useNavigate();
  const searchQueryHandler = (e) =>{
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  }

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome!</span>
          <span className="subTitle">
            Discover and explore millions of movies, TV shows, and people. Start
            your journey now.
          </span>
          <form className="searchInput" onSubmit={searchQueryHandler}>
            <input type="text" placeholder="Search for a movie or tv show.." onChange={ (e) =>{setSearchQuery(e.target.value)}} />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner