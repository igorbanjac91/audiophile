import React from "react";
import { ArrowRightIcon } from "./Icons";
import Earphones from "../../../../assets/images/seeds/image-earphones.png"


const CategoriesList = () => {

  return (
    <div className="categories-list">
      <ul>
        <CategoriesListItem /> 
        <CategoriesListItem /> 
        <CategoriesListItem /> 
      </ul>
    </div>
  )
}

const CategoriesListItem = () => {
  
  return (
    <li className="categories-list__item">
      <img src={Earphones} alt="earphones" />
      <h3>HEADPHONES</h3>
      <a className="btn-shop">
        <span>SHOP</span>
        <ArrowRightIcon />
      </a>
    </li>
  )
}

export default CategoriesList;