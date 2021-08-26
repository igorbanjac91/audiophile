import React from "react";
import { ArrowRightIcon } from "./Icons";
import Earphones from "../../../../assets/images/seeds/image-earphones.png"
import Headphones from "../../../../assets/images/seeds/image-headphones.png"
import Speaker from "../../../../assets/images/seeds/image-speakers.png"

const CategoriesList = () => {

  return (
    <div className="categories-list">
      <ul>
        <CategoriesListItem image={Headphones} /> 
        <CategoriesListItem image={Speaker} /> 
        <CategoriesListItem image={Earphones} /> 
      </ul>
    </div>
  )
}

const CategoriesListItem = (props) => {
  
  return (
    <li className="categories-list__item">
      <img src={props.image} alt="earphones" />
      <h3>HEADPHONES</h3>
      <a className="btn-shop">
        <span>SHOP</span>
        <ArrowRightIcon />
      </a>
    </li>
  )
}

export default CategoriesList;