import React from "react";
import { useParams } from "react-router";

const Products = () => {

  let param = useParams();

  return (
    <div className="product">
      <Product name={param.slug}/>
    </div>
  )
}


function Product(props) {

  return (
    <div className="product">
      <h2>{props.name}</h2>
    </div>
  )
}


export default Products;