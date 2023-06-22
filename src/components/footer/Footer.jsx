import React from 'react';
import { GrFacebook, GrInstagram, GrTwitter, GrLinkedin } from "react-icons/Gr";
import Wrapper from '../wrapper/Wrapper';

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi itaque qui tempora illo at eveniet repellat ratione asperiores rerum voluptas sunt veniam ad reprehenderit harum, fuga dolor sed repellendus veritatis doloribus obcaecati? Similique, ut magnam?
        </div>
        <div className="socialIcons">
          <span className="icon">
            <GrFacebook />
          </span>
          <span className="icon">
            <GrInstagram />
          </span>
          <span className="icon">
            <GrTwitter />
          </span>
          <span className="icon">
            <GrLinkedin />
          </span>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;