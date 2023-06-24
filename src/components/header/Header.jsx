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

  // to set the page again at top when we change page 
  // Try to make it global move to main section.
  useEffect(() => {
    window.scrollTo(0,0)
  }, [location]);

  const controlNavbar = () => {
    if(window.scrollY > 150){
      if(window.scrollY>lastScrollY){
        setShow("hide");
      }
      else{
        setShow("show");
      }
    }
    else{
        setShow("top");
    }
    SetLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll",controlNavbar);

    return (()=>{
      window.removeEventListener("scroll", controlNavbar);
    })
    
  }, [lastScrollY]);

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
        <div className="logo" onClick={()=>{navigate("/")}}>
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