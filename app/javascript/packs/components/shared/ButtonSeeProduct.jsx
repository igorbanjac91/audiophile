import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const ButtonSeeProduct = (props) => {
  const history = useHistory();
  
  function handleClick() {
    history.push(props.location)
  }

  return (
    <Link to={`/products/${props.slug}`} 
          className="btn-see-product" 
          onClick={handleClick}>SEE PRODUCT</Link>
  )
}

export default ButtonSeeProduct;