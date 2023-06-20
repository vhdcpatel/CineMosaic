import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import "./HeroBanner.css"
import Wrapper from '../../../components/wrapper/Wrapper';
import LazyLoadingImages from '../../../components/lazyLoadingImages/LazyLoadingImages';

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
      {!loading &&  <div className="backdrop-img">
        <LazyLoadingImages src={background}></LazyLoadingImages>
      </div>}
      <div className="opacity-layer"></div>
      <Wrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome!</span>
          <span className="subTitle">
            Discover and explore millions of movies, TV shows, and people. Start
            your journey now.
          </span>
          <form className="searchInput" onSubmit={searchQueryHandler}>
            <input
              type="text"
              placeholder="Search for a movie or tv show.."
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              />
            <button>Search</button>
          </form>
        </div>
      </Wrapper>
    
    </div>
  );
}

export default HeroBanner