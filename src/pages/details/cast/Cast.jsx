import React from "react";
import { useSelector } from "react-redux";
import Wrapper from "../../../components/wrapper/Wrapper";
import LazyLoadingImages from "../../../components/lazyLoadingImages/LazyLoadingImages";
import avatar from "../../../assets/avatar.png";

import "./Cast.css";

const CastSection = ({ data, loading }) => {
  const url = useSelector((state) => state.home.url);
  
  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="castSection">
      <Wrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item)=>{
              let imgUrl = item.profile_path ? (url.profile + item.profile_path) : avatar
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    <LazyLoadingImages src={imgUrl} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </Wrapper>
    </div>
  );
};


export default CastSection;
