import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";
import Earphones from "../../../../assets/images/seeds/image-earphones.png";
import Headphones from "../../../../assets/images/seeds/image-headphones.png";
import Speaker from "../../../../assets/images/seeds/image-speakers.png";

const CategoriesList = () => {

  return (
    <div className="categories-list">
      <ul>
        <CategoriesListItem image={Headphones} slug="headphones"/> 
        <CategoriesListItem image={Speaker} slug="speakers" /> 
        <CategoriesListItem image={Earphones} slug="earphones"/> 
      </ul>
    </div>
  )
}

const CategoriesListItem = (props) => {
  
  return (
    <li className="categories-list__item">
      <img src={props.image} alt={props.slug} />
      <h3>{props.slug.toUpperCase()}</h3>
      <Link to={`/categories/${props.slug}`} className="btn-shop">
        <span>SHOP</span>
        <ArrowRightIcon />
      </Link>
    </li>
  )
}

export default CategoriesList;