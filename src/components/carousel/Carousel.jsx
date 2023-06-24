import React, { useRef } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from 'dayjs';

import Wrapper from '../wrapper/Wrapper';
import LazyLoadingImages  from '../lazyLoadingImages/LazyLoadingImages';
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from '../circleRating/circleRating';
import Genres from '../genres/Genres';

import "./Carousel.css";


const Carousel = ({ data, isLoading,endpoint,title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior:"smooth",
    });
    
  };

  const skItem = ()=>{
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="carousel">
      <Wrapper>
        {title && <div className="carouselTitle">{title}</div>}

        <BsFillArrowLeftCircleFill
          className="arrow carouselLeftNav"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="arrow carouselRightNav"
          onClick={() => navigation("right")}
        />
        {!isLoading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item, index) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div key={item.id} className="carouselItem" onClick={()=>{navigate(`/${item.media_type}/${item.id}`)}}>
                  <div className="posterBlock">
                    <LazyLoadingImages src={posterUrl} />
                    {/* Need Update */}
                    {/* <CircleRating  rating={item.vote_average.toFixed(1)}/> */}
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Carousel;