import React, { useEffect, useState } from "react";
import { HamburgerIcon, Logo, CartIcon } from "./shared/Icons";
import CategoriesList from "./shared/CategoriesList";
import { useWindowSize } from "./utils";
import { Link, useHistory } from "react-router-dom";

const Nav = () => {

  let [ menuDown, setMenuDown ] = useState(false);
  let [ cartDown, setCartDown ] = useState(false);
  let history = useHistory();
  let windowSize = useWindowSize();
  let mainContent = document.querySelector(".main-content-container");
  let body = document.querySelector("body");
  let menu = document.querySelector(".main-nav > .categories-list");
  let cart = document.querySelector(".cart")
  let menuLink = document.querySelector(".menu-link")
  let cartLink = document.querySelector(".cart-link")

  useEffect(() => {

    if ( windowSize.width > 960 ) {
      if (menuDown) {
        hideNavMenu(menu);
      }
    }    
  },[windowSize])
  

  function handleClickMenu(e) {
    e.preventDefault();
    
    history.push("/");

    if (menuDown) {
      hideNavMenu(menu);
    } else {
      showNavMenu(menu);
      hideNavMenu(cart);
      mainContent.classList.add("drop-shadow");
    }
    
    body.addEventListener("click", hideMenu);
    
    function hideMenu(event) {
      if (event.target != e.target && event.target != cartLink) {
        hideNavMenu(menu);
      }
    }
  }

  function handleClickCart(e) {
    e.preventDefault();

    if (cartDown) {
      hideNavMenu(cart);
    } else {
      showNavMenu(cart);
      hideNavMenu(menu);
      mainContent.classList.add("drop-shadow");
    }
    
    body.addEventListener("click", hideMenu);
    
    function hideMenu(event) {
      if (event.target != e.target && event.target != menuLink) {
        hideNavMenu(cart);
      }
    }
  }

  function hideNavMenu(menu) {
    menu.style.display = "none";
    mainContent.classList.remove("drop-shadow");
    if (menu == cart) {
      setCartDown(false);
    } else {
      setMenuDown(false);
    }
  }
  
  function showNavMenu(menu) {
    menu.style.display = "block";
    mainContent.classList.add("drop-shadow");
    if (menu == cart) {
      setCartDown(true);
    } else {
      setMenuDown(true);
    }
  }
  
  return (
    <nav className="main-nav">
      <ul>
        <li className="main-nav__menu">
          <a to="/" className="menu-link" onClick={handleClickMenu} >
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
          <Link className="logo" to="/">
            <Logo />
          </Link>
        </li>
        <li className="main-nav__cart">
          <a className="cart-link" onClick={handleClickCart} >
            <CartIcon />
          </a>
        </li>
      </ul>
      <CategoriesList />
    </nav>
  )
}

export default Nav;