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


const Carousel = ({ data, isLoading, }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {};

  return (
    <div className="carousel">
      <Wrapper>
        <BsFillArrowLeftCircleFill
          className="arrow carouselLeftNav"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="arrow carouselRightNav"
          onClick={() => navigation("right")}
        />
        {!isLoading ? (
          <div className="carouselItems">
            {data?.map((item,index) =>{
              console.log(index);
              return(
                <div key={item.id} className="carouselItem"></div>
              );
            })}
          </div>
        ) : (
          <span>Loading</span>
        )}
      </Wrapper>
    </div>
  );
};

export default Carousel;