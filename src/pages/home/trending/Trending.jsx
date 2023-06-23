import React from 'react'
import Wrapper from '../../../components/wrapper/Wrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import "./Trending.css";

const Trending = () => {

  const onTabChange = (tab)=>{

  }

  return (
    <div className="carouselSection">
      <Wrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["day", "Week"]} onTabChange={onTabChange} />
      </Wrapper>
    </div>
  );
}

export default Trending