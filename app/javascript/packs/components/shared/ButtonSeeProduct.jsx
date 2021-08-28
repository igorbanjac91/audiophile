import { func } from "prop-types";
import React from "react";

const ButtonSeeProduct = (props) => {

  function handleClick() {
    props.handleClick();
  }

  return (
    <button className="btn-see-product" onClick={handleClick}>SEE PRODUCT</button>
  )
}

export default ButtonSeeProduct;