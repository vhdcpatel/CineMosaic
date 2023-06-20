import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoadingImages = ({src,className}) => {
  return (
  <div>
    <LazyLoadImage
    className={className || ""}
    alt=""
    effect='blur'
    src={src}
    >
    </LazyLoadImage>
  </div>
  )
}

export default LazyLoadingImages