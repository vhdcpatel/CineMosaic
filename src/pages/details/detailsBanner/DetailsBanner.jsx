import React from 'react'
import dayjs from 'dayjs';

import "./DetailsBanner.css";
import Wrapper from '../../../components/wrapper/Wrapper';
import useFetch from '../../../hooks/useFetch';
import Genres from '../../../components/genres/Genres';
import CircleRating from '../../../components/circleRating/circleRating';
import LazyLoadingImages from '../../../components/lazyLoadingImages/LazyLoadingImages';
import PosterFallback from "../../assets/no-poster.png";



const DetailsBanner = ({}) => {

  const toHoursAndMinutes = (totalMinutes)=>{
    const hours = Math.floor(totalMinutes/60);
    const minutes = totalMinutes%60;
    return `${hours}h ${minutes>0 ? `${minutes}m`: ""}`
  };

  return (
    <div className="detailsBanner">
      {!loading ? (
         <div>Details Content...</div>
      ):(
        // Loading Skeleton(Show untill data is not loaded.)
        <div className="detailsBannerSkeleton">
          <Wrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </Wrapper>
        </div>
      )}

    </div>
  )
}

export default DetailsBanner