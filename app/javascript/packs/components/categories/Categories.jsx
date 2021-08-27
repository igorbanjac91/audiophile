import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CategoriesList from "../shared/CategoriesList";
import ProductInfo from "../products/ProductInfo";

const Categories = () => {

  const [ products, setProducts ] = useState([]);
  let param = useParams();

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {

    axios
      .get(`/api/v1/products?category=${param.name}`)
      .then( response => {
        let fetchedProducts = response.data
        setProducts(fetchedProducts);
      }).catch( e => {
        console.log(e);
      }) 
  }

  return (
    <div className="categories">
      <Category name={param.name} products={products} />
      <CategoriesList />
    </div>
  )
}

const Category = (props) => {


  return (
    <div className="category">
      <h2 className="category__header">{props.name}</h2>
      <ProductsList products={props.products} />
    </div>
  )
}

const ProductsList = (props) => {

  let products = props.products

  let productsListItem = products.map( (product) => {
    return <ProductsListItem key={product.id} product={product} />
  });

  return (
    <div className="products-list">
      <ul>
        {productsListItem}
      </ul>
    </div>
  )
}


const ProductsListItem = (props) => {

  return (
    <li className="products-list__item" >
      <img src="" alt="" />
      <ProductInfo item={props.product}/>
    </li>
  )
}


export default Categories;