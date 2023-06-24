import React, { useState } from "react";
import Wrapper from "../../../components/wrapper/Wrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import "./Popular.css";

const Popular = () => {
  const endPoints = ["movie", "tv"];
  const [endPoint, setEndPoint] = useState(endPoints[0]);
  const path = `/${endPoint}/popular`;

  const { data, loading } = useFetch(path);

  const onTabChange = (tab) => {
    setEndPoint(tab);
  };

  return (
    <div className="carouselSection">
      <Wrapper>
        <span className="carouselTitle">Popular</span>
        <SwitchTabs data={[...endPoints]} onTabChange={onTabChange} />
      </Wrapper>
      <Carousel data={data?.results} isLoading={loading} endpoint={endPoint}></Carousel>
    </div>
  );
};

export default Popular;
