import React, { useState } from 'react'
import Wrapper from '../../../components/wrapper/Wrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';
import "./Trending.css";
import Carousel from '../../../components/carousel/Carousel';

const Trending = () => {

  const endPoints = ["day","week"];
  const [endPoint,setEndPoint] = useState(endPoints[0])
  const path = `/trending/all/${endPoint}`;
  
  const {data, loading} = useFetch(path);

  const onTabChange = (tab)=>{
    setEndPoint(tab)
  }

  return (
    <div className="carouselSection">
      <Wrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={[...endPoints]} onTabChange={onTabChange} />
      </Wrapper>
      <Carousel data={data?.results} isLoading={loading}></Carousel>
    </div>
  );
}

export default Trending