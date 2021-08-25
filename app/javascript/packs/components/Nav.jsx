import React, { useState } from "react";
import { HamburgerIcon, Logo, CartIcon } from "./shared/Icons";
import CategoriesList from "./shared/CategoriesList";

const Nav = () => {

  let [ menuDown, setMenuDown ] = useState(false);

  function handleClick(e) {
    e.preventDefault()

    let menu = document.querySelector(".main-nav > .categories-list");
    let body = document.querySelector("body");
    
    
    if (menuDown) {
      menu.style.display = "none";
      setMenuDown(false)
    } else {
      menu.style.display = "block";
      setMenuDown(true)
    }
    
    body.addEventListener("click", hideMenu);
    
    function hideMenu(event) {
      if (event.target !=  e.target) {
        setMenuDown(false)
        menu.style.display = "none";
      }
    }
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
              <li><a href="#">HOME</a></li>
              <li><a href="#">HEADPHONES</a></li>
              <li><a href="#">SPEAKERS</a></li>
              <li><a href="#">EARPHONES</a></li>
            </ul>
          </nav>
        </li>
        <li className="main-nav__logo">
          <a href="#">
            <Logo />
          </a>
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