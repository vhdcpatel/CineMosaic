import React, { useEffect, useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi"
import { SlMenu } from "react-icons/sl"
import { VscChromeClose } from "react-icons/vsc"
import { useNavigate,useLocation } from 'react-router-dom'
import Wrapper from '../wrapper/Wrapper'
import logo from "../../assets/mainLogo.png"

import "./Header.css";

const Header = () => {
  const [show,setShow] = useState("top");
  const [lastScrollY,SetLastScrollY] = useState(0);
  const [MobileMenu,setMobileMenu] = useState(false);
  const [query,setQuery] = useState("");
  const [showSearch,setShowSearch]=useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const openSearch = () =>{
    setMobileMenu(false);
    setShowSearch(true);

  }

  const openMobileMenu = ()=>{
    setMobileMenu(true);
    setShowSearch(false);

  }

   const searchQueryHandler = (e) => {
     e.preventDefault();
     navigate(`/search/${query}`);
     setTimeout(()=>{
      setShowSearch(false);
     },500)

   };

  return (
    <header className={`header ${MobileMenu ? "mobileView" : ""}  ${show}`}>
      <Wrapper className="contentWrapper">
        <div className="logo">
          <img src={logo} alt="Logo png image" />
          CineMosic
        </div>
        <ul className="menuItems">
          <li
            className="menuItem"
            onClick={() => {
              navigate("/explore/movie");
              setMobileMenu(false);

            }}
          >
            Movies
          </li>
          <li
            className="menuItem"
            onClick={() => {
              navigate("/explore/tv");
              setMobileMenu(false);
            }}
          >
            TV Shows
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {!MobileMenu ? (
            <SlMenu onClick={openMobileMenu} />
          ) : (
            <VscChromeClose
              onClick={() => {
                setMobileMenu(false);
              }}
            />
          )}
        </div>
      </Wrapper>
      {showSearch && (
        <div className="searchBar">
          <Wrapper>
            <form className="searchInput" onSubmit={searchQueryHandler}>
              <input
                type="text"
                placeholder="Search for a movie or tv show.."
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
              <VscChromeClose
                onClick={() => {
                  setShowSearch(false);
                }}
              />
            </form>
          </Wrapper>
        </div>
      )}
    </header>
  );
}

export default Header