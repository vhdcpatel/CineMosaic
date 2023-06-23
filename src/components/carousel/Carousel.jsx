import React from 'react';
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


const Carousel = () => {
  return (
    <div>Carousel</div>
  )
}

export default Carousel;