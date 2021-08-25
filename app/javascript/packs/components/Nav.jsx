import React, { useState } from "react";
import { HamburgerIcon, Logo, CartIcon } from "./shared/Icons";
import CategoriesList from "./shared/CategoriesList";

const Nav = () => {

  let [ menuDown, setMenuDown ] = useState(false);

  function handleClick(e) {
    e.preventDefault();

    let menu = document.querySelector(".main-nav > .categories-list");
    let body = document.querySelector("body");
    let mainContent = document.querySelector(".main-content-container");
    
    
    if (menuDown) {
      menu.style.display = "none";
      setMenuDown(false);
      toggleDarkenPage();
    } else {
      menu.style.display = "block";
      setMenuDown(true);
      toggleDarkenPage();
    }
    
    body.addEventListener("click", hideMenu);
    
    function hideMenu(event) {
      if (event.target !=  e.target) {
        setMenuDown(false)
        menu.style.display = "none";
        mainContent.classList.remove("drop-shadow");
      }
    }

    function toggleDarkenPage() {
      if (Array.from(mainContent.classList).includes("drop-shadow")) {
        mainContent.classList.remove("drop-shadow");
      } else {
        mainContent.classList.add("drop-shadow");
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