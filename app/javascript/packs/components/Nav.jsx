import React from "react";
import { HamburgerIcon, Logo, CartIcon } from "./shared/Icons";

const Nav = () => {

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <a href="#">
            <HamburgerIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <Logo />
          </a>
        </li>
        <li>
          <a href="#">
            <CartIcon />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;