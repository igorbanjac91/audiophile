import React, { useEffect, useState } from "react";
import { HamburgerIcon, Logo, CartIcon } from "./shared/Icons";
import CategoriesList from "./shared/CategoriesList";
import { useWindowSize } from "./utils";
import { Link } from "react-router-dom";

const Nav = () => {

  let [ menuDown, setMenuDown ] = useState(false);
  let windowSize = useWindowSize();
  let mainContent = document.querySelector(".main-content-container");
  let menu = document.querySelector(".main-nav > .categories-list");

  useEffect(() => {

    if ( windowSize.width > 960 ) {
      hideNavMenu();
    }
    
  },[windowSize])
  
  function handleClick(e) {
    e.preventDefault();
    
    let body = document.querySelector("body");
    
    if (menuDown) {
      hideNavMenu();
    } else {
      showNavMenu();
    }
    
    body.addEventListener("click", hideMenu);
    
    function hideMenu(event) {
      if (event.target !=  e.target) {
        hideNavMenu();
      }
    }
  }

  function hideNavMenu() {
    menu.style.display = "none";
    setMenuDown(false)
    mainContent.classList.remove("drop-shadow");
  }
  
  function showNavMenu() {
    menu.style.display = "block";
    setMenuDown(true);
    mainContent.classList.add("drop-shadow");
  }
  
  return (
    <nav className="main-nav">
      <ul>
        <li className="main-nav__menu">
          <a onClick={handleClick} >
            <HamburgerIcon />
          </a>
          <nav className="menu-nav">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/categories/headphones">HEADPHONES</Link>
              </li>
              <li>
                <Link to="/categories/speakers">SPEAKERS</Link>
              </li>
              <li>
                <Link to="/categories/earphones">EARPHONES</Link>
              </li>
            </ul>
          </nav>
        </li>
        <li className="main-nav__logo">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li className="main-nav__cart">
          <a href="#">
            <CartIcon />
          </a>
        </li>
      </ul>
      <CategoriesList />
    </nav>
  )
}

export default Nav;