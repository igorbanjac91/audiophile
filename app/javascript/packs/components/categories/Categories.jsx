import React from "react";
import { useParams } from "react-router";

const Categories = () => {

  let param = useParams();

  return (
    <div className="categories">
      <Category name={param.slug}/>
    </div>
  )
}


function Category(props) {

  return (
    <div className="category">
      <h2>{props.name}</h2>
    </div>
  )
}


export default Categories;