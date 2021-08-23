import React from "react";
import { useParams } from "react-router-dom";

function Category() {
  let { categorySlug } = useParams();

  console.log(categorySlug)

  return (
    <h2>{categorySlug}</h2>
  )
}

export default Category;