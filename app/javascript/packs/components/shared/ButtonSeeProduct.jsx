import React from "react";
import { Link } from "react-router-dom";

const ButtonSeeProduct = (props) => {
  return (
    <Link to={`/products/${props.slug}`} className="btn-see-product">SEE PRODUCT</Link>
  )
}

export default ButtonSeeProduct;